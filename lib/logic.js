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
/**
 * Write your transction processor functions here
 */
/**
 * Transaction to create a new delay insurance policy
 * @param {org.insurance.CreateDelayInsurancePolicy} tx
 * @transaction
 */
async function createDelayInsurancePolicy(tx) {

    const insureeParticipantRegistry = await getParticipantRegistry('org.insurance.Insuree');
    let insuree = await insureeParticipantRegistry.get(tx.insuree.insureeId);
    checkSuficientFunds(10, insuree.balance);
    insuree.balance = insuree.balance - 10;

    delayInsurancePolicyId = getFirstLetter(tx.insurer.name) + getFirstLetter(tx.insuree.firstName) + getTimestamp();

    // Get the asset registry for the asset.
    const insuranceAssetRegistry = await getAssetRegistry('org.insurance.DelayInsurancePolicy');
    // Update the asset in the asset registry.
    let factory = await getFactory();
    let insurancePolicy = factory.newResource('org.insurance', 'DelayInsurancePolicy', delayInsurancePolicyId);
    let flightDetails = factory.newConcept('org.insurance', 'FlightDetails');

    const flightDetailsProperties = {
        flightStatus: 'Undefined',
        flightDesignator: tx.flightDesignator,
        departureDate: tx.departureDate,
        departureAirport: tx.departureAirport
    };
    Object.assign(flightDetails, flightDetailsProperties);
    const insurancePolicyProperties = {
        escrow: 10, // This should be a constant
        insurer: tx.insurer,
        insuree: tx.insuree,
        policyState: 'Initiated',
        flightDetails: flightDetails
    };
    Object.assign(insurancePolicy, insurancePolicyProperties);
    
    await insureeParticipantRegistry.update(insuree);
    await insuranceAssetRegistry.add(insurancePolicy);

}

/**
 * Transaction to create a new Insuree
 * @param {org.insurance.CreateInsuree} tx
 * @transaction
 */
async function createInsuree(tx) {

    // Get the participant registry.
    const insureeParticipantRegistry = await getParticipantRegistry('org.insurance.Insuree');
    // Get factory and create the new participant.
    let factory = await getFactory();
    let newInsuree = factory.newResource('org.insurance', 'Insuree', tx.email);
    
    // assign Insuree atributes
    newInsuree.firstName = tx.firstName;
    newInsuree.lastName = tx.lastName;
    newInsuree.balance = 50;

    await insureeParticipantRegistry.add(newInsuree);

}

/**
 * Transaction to create a new Insurer
 * @param {org.insurance.CreateInsurer} tx
 * @transaction
 */
async function createInsurer(tx) {

    // Get the participant registry.
    const insurerParticipantRegistry = await getParticipantRegistry('org.insurance.Insurer');
    // Get factory and create the new participant.
    let factory = await getFactory();
    let newInsurer = factory.newResource('org.insurance', 'Insurer', tx.email);
    
    // assign Insurer atributes
    newInsurer.name = tx.name;
    newInsurer.balance = 500;

    await insurerParticipantRegistry.add(newInsurer);

}


/**
 * Transaction to create a new Oracle
 * @param {org.insurance.CreateOracle} tx
 * @transaction
 */
async function createOracle(tx) {

    // Get the participant registry.
    const oracleParticipantRegistry = await getParticipantRegistry('org.insurance.Oracle');
    // Get factory and create the new participant.
    let factory = await getFactory();
    let newOracle = factory.newResource('org.insurance', 'Oracle', '0');
    
    // assign Oracle atributes
    newOracle.insuranceType = 'Flight Delay';

    await oracleParticipantRegistry.add(newOracle);

}


function checkSuficientFunds(amount, accountFrom){
    let balance = accountFrom - amount;
    if( balance < 0) {
        throw new Error("Insuficient funds");
    }
}

// Returns current date timestamp

function getTimestamp(){
    let rightNow = new Date();
    return rightNow.getTime().toString();
}

function getFirstLetter(word){
    let firstLetter = word.charAt(0);
    return firstLetter.toUpperCase();
}




