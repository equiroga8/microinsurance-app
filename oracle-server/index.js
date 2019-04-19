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

class SitechainListener{

	constructor() {

        	this.bizNetworkConnection = new BusinessNetworkConnection();
    	}


	init() {

        	return this.bizNetworkConnection.connect('admin@delay-insurance-network')
      		.then((result) => {
          		this.businessNetworkDefinition = result;
              console.log(chalk.black.bgGreen.bold('Success'));
          		//LOG.info(this.businessNetworkDefinition.getIdentifier());
      		})
      		// and catch any exceptions that are triggered
      		.catch(function (error) {
          		throw error;
      		});

    	}

  getLHAccessToken() {

    this.APIKey
  }


	/** Listen for the sale transaction events
     	*/
     	listen(){
       		this.bizNetworkConnection.on('event',(evt)=>{

            if (evt.flightRecordId) {
              console.log('Oracle query event registered with flightRecordId: '+ chalk.blue(evt.flightRecordId));
              console.log(process.env.TEST);
            }
       });
     }




}



var lnr = new SitechainListener();
lnr.init();
lnr.listen()