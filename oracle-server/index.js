/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
require('dotenv').config();
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
var chalk = require('chalk');
var request = require('request-promise');
const util = require('util');

const constants = require('./constants');

class OracleListener{

	constructor() {

        	this.bizNetworkConnection = new BusinessNetworkConnection();
    	}


	init() {

        	return this.bizNetworkConnection.connect('admin@insurance-network')
      		.then((result) => {
          		this.businessNetworkDefinition = result;
              console.log(chalk.green.bold('Connected to insurance-network successfully'));
      		})
      		// and catch any exceptions that are triggered
      		.catch(function (error) {
          		throw error;
      		});

    	}

  async getLHAccessToken() {

    var requestOptions = {
        encoding: 'utf8',
        uri: 'https://api.lufthansa.com/v1/oauth/token',
        method: 'POST',
        form: {
            client_id : process.env.LHAPI_CLIENT_ID, 
            client_secret: process.env.LHAPI_CLIENT_SECRET, 
            grant_type: 'client_credentials'
        },
        json: true
    };

    
    try {
      let response = await request(requestOptions);
      this.apiKey = response.access_token;
      console.log(chalk.green.bold(`Retrieved API key: ${this.apiKey}`));
    } catch(error) {
      console.log('ERROR: ' + error);
    }
  }

  async getFlightStatus(flightDesignator, departureDate) {

    let updatedFlightStatus;

    var getOptions = {
      uri: 'https://api.lufthansa.com/v1/operations/flightstatus/' + flightDesignator + '/' + departureDate,
      headers: {
        'Authorization': 'Bearer '+ this.apiKey,
        'Accept': 'application/json'
      },
      json: true
    };
    try {
      let response = await request(getOptions);
      console.log("Flight found");
      updatedFlightStatus = this.parseResponse(response.FlightStatusResource.Flights.Flight);
    } catch (error) {
      console.log("No flight found with those parameters");
      updatedFlightStatus = constants.UNDEFINED;
    }

    return updatedFlightStatus;
  }

  parseResponse(response) {

    let flightStatus;

    switch (response.FlightStatus.Code) {
      case constants.FLIGHT_CANCELLED:
        flightStatus = constants.CANCELLED;
        break;
      case constants.FLIGHT_LANDED:
        flightStatus = response.Arrival.TimeStatus.Code === constants.FLIGHT_DELAYED 
          ? constants.DELAYED : constants.ON_TIME;
        break;
      case constants.FLIGHT_REROUTED:
        flightStatus = constants.DELAYED;
        break;
      default:
        flightStatus = constants.ON_SCHEDULE;
        break;            
    }

    return flightStatus;

  }

  splitFlightRecordId(flightRecordId) {
    var length = flightRecordId.length - 13;
    var regex = new RegExp("[A-Z]{2}\\d{" + length + "}");
    var flightDesignator = regex.exec(flightRecordId);
    var unformattedDate = flightRecordId.substr(2+length, 8);
    var departureDate = unformattedDate.substr(0,4) + '-' + unformattedDate.substr(4,2) + '-' + unformattedDate.substr(6);
    console.log(flightDesignator, departureDate);
    return { flightDesignator, departureDate }
    
  }

  async publishFlightRecord(flightRecordId, flightStatus){

    var requestOptions = {
        encoding: 'utf8',
        uri: 'http://localhost:3005/api/PublishFlightRecord',
        method: 'POST',
        form: {
            $class : 'org.insurance.PublishFlightRecord', 
            flightRecordId: flightRecordId, 
            updatedFlightStatus: flightStatus
        },
        json: true
    };

    
    try {
      let response = await request(requestOptions);
      if (response.transactionId){
        console.log(chalk.green.bold(`Flight record published with id ${flightRecordId} and ${flightStatus}`));
      }
      
    } catch(error) {
      console.log('ERROR: ' + error);
    }

  }


	// Listen for OracleQuery events

  listen(){
    console.log(chalk.blue('Listening for OracleQuery events:'));
    this.bizNetworkConnection.on('event', async (evt)=>{
      if (evt.flightRecordId && evt.$type === "OracleQuery") {
        console.log(chalk.blue('-----------------------------------------------------------'));
        console.log('Oracle query event registered with flightRecordId: '+ chalk.blue(evt.flightRecordId));

        let flightDetails = this.splitFlightRecordId(evt.flightRecordId);

        let { flightDesignator, departureDate } = flightDetails;

        let flightStatus =  constants.ON_SCHEDULE //await this.getFlightStatus(flightDesignator, departureDate);

        await this.publishFlightRecord(evt.flightRecordId, flightStatus);           
      }
      
    });
  }
}

var oracleListener = new OracleListener();
oracleListener.init();
oracleListener.getLHAccessToken();
oracleListener.listen();