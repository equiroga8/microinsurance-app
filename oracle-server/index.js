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

class SitechainListener{

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
      console.log(chalk.green.bold('Retrieved API key'));
    } catch(error) {
      console.log('ERROR: ' + error);
    }
  }

  async getFlightStatus(flightDesignator, departureDate ) {

    var getOptions = {
          uri: 'https://api.lufthansa.com/v1/operations/flightstatus/' + flightDesignator + '/' + departureDate,
          headers: {
            'Authorization': 'Bearer ' + this.apiKey,
            'Accept': 'application/json'
          },
          json: true 
        };
        try {
          let response = await request(getOptions);
          console.log(util.inspect(response, false, null, true));
        } catch(error) {
        console.log('ERROR: ' + error);
        }
  }

   splitFlightRecordId(flightRecordId) {

    var [flightDesignator] = flightRecordId.match(/[A-Z]{2}\d{3}/);
    var unformattedDate = flightRecordId.substr(5, 8);
    var departureDate = unformattedDate.substr(0,4) + '-' + unformattedDate.substr(4,2) + '-' + unformattedDate.substr(6);
    console.log(flightDesignator, departureDate);
    return { flightDesignator, departureDate }
    
  }


	/** Listen for the sale transaction events
     	*/
  listen(){
    console.log(chalk.blue('Listening for OracleQuery events:'));
    this.bizNetworkConnection.on('event',(evt)=>{
      if (evt.flightRecordId) {
        console.log('Oracle query event registered with flightRecordId: '+ chalk.blue(evt.flightRecordId));

        let flightDetails = splitFlightRecordId(evt.flightRecordId);

        let { flightDesignator, departureDate } = flightDetails;

        let response = getFlightStatus(flightDesignator, departureDate )
              
      }
      
    });
  }




}



var lnr = new SitechainListener();
lnr.init();
lnr.getLHAccessToken();
lnr.splitFlightRecordId('LH40420190422MAD');
lnr.listen();
lnr.getFlightStatus('LH404','2019-04-22' );