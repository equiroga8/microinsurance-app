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
        flightStatus: 'UNDEFINED',
        flightDesignator: tx.flightDesignator,
        departureDate: tx.departureDate,
        departureAirport: tx.departureAirport
    };
    Object.assign(flightDetails, flightDetailsProperties);
    const insurancePolicyProperties = {
        escrow: 10, // This should be a constant
        insurer: tx.insurer,
        insuree: tx.insuree,
        policyState: 'INITIATED',
        flightDetails: flightDetails
    };
    Object.assign(insurancePolicy, insurancePolicyProperties);
    
    await insureeParticipantRegistry.update(insuree);
    await insuranceAssetRegistry.add(insurancePolicy);

    //emit event
    let oracleQueryEvent = factory.newEvent('org.insurance', 'OracleQuery');
    oracleQueryEvent.flightRecordId = getFlightRecordGroupId(flightDetails);
    emit(oracleQueryEvent);
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

/**
 * Transaction to create a new Oracle
 * @param {org.insurance.PublishFlightRecord} tx
 * @transaction
 */
async function publishFlightRecord(tx) {
    
    const flightRecordAssetRegistry = await getAssetRegistry('org.insurance.FlightRecord');
    try {
        let flightRecord = await flightRecordAssetRegistry.get(tx.flightRecordId);
        flightRecord.flightStatus = tx.updatedFlightStatus;
        await flightRecordAssetRegistry.update(flightRecord);
    } 
    catch(error) {
        console.log("Creating new flight record");
        let factory = await getFactory();
        let flightRecord = factory.newResource('org.insurance', 'FlightRecord', tx.flightRecordId);
        flightRecord.flightStatus = tx.updatedFlightStatus;
        await flightRecordAssetRegistry.add(flightRecord);
    }


}

/**
 * Transaction to create a new Oracle
 * @param {org.insurance.AcceptDelayInsurancePolicy} tx
 * @transaction
 */
async function acceptDelayInsurancePolicy(tx) {
    // Get delay insurance policy asset
    const delayInsuranceAssetRegistry = await getAssetRegistry('org.insurance.DelayInsurancePolicy');
    let delayInsurancePolicy = await delayInsuranceAssetRegistry.get(tx.delayInsurancePolicyId);    
    
    // get flightRecordGroupId

    let flightRecordId = getFlightRecordGroupId(delayInsurancePolicy.flightDetails);
    
    // get flight record asset
    const flightRecordAssetRegistry = await getAssetRegistry('org.insurance.FlightRecord');
    let flightRecord = await flightRecordAssetRegistry.get(flightRecordId);

    let updatedFlightStatus = flightRecord.flightStatus;
    
    delayInsurancePolicy.flightDetails.flightStatus = updatedFlightStatus;
  
    // compare
    if (updatedFlightStatus === 'ONSCHEDULE') {
        const insurerParticipantRegistry = await getParticipantRegistry('org.insurance.Insurer');
        let insurer = await insurerParticipantRegistry.get(delayInsurancePolicy.insurer.getIdentifier());
        checkSuficientFunds(90, insurer.balance);
        insurer.balance -= 90;
        await insurerParticipantRegistry.update(insurer);
        delayInsurancePolicy.escrow += 90;
        delayInsurancePolicy.policyState = 'PENDING';


    } else {
        const insureeParticipantRegistry = await getParticipantRegistry('org.insurance.Insuree');
        let insuree = await insureeParticipantRegistry.get(delayInsurancePolicy.insuree.getIdentifier());
        checkSuficientFunds(10, delayInsurancePolicy.balance);
        insuree.balance += 10;
        await insureeParticipantRegistry.update(insuree);
        delayInsurancePolicy.escrow -= 10;
        delayInsurancePolicy.policyState = 'CANCELLED';
    }
    
    // modify asset
    await delayInsuranceAssetRegistry.update(delayInsurancePolicy);

    // emit event
    let factory = await getFactory();
    let oracleQueryEvent = factory.newEvent('org.insurance', 'OracleQuery');
    oracleQueryEvent.flightRecordId = flightRecordId;
    emit(oracleQueryEvent);

}

/**
 * Transaction to create a new Oracle
 * @param {org.insurance.UpdateDelayInsurancePolicy} tx
 * @transaction
 */
async function updateDelayInsurancePolicy(tx) {
    // Get delay insurance policy asset
    const delayInsuranceAssetRegistry = await getAssetRegistry('org.insurance.DelayInsurancePolicy');
    let delayInsurancePolicy = await delayInsuranceAssetRegistry.get(tx.delayInsurancePolicyId);

    // get flightRecordGroupId

    let flightRecordId = getFlightRecordGroupId(delayInsurancePolicy.flightDetails);

    // Call oracle event
    let factory = await getFactory();
    let oracleQueryEvent = factory.newEvent('org.insurance', 'OracleQuery');
    oracleQueryEvent.flightRecordId = flightRecordId;
    emit(oracleQueryEvent);    
    // Wait for oracle to update flight record
    await sleep(2000);
    
    // get flight record asset
    const flightRecordAssetRegistry = await getAssetRegistry('org.insurance.FlightRecord');
    let flightRecord = await flightRecordAssetRegistry.get(flightRecordId);

    let updatedFlightStatus = flightRecord.flightStatus;
    
    delayInsurancePolicy.flightDetails.flightStatus = updatedFlightStatus;
  
    // compare
    if (updatedFlightStatus === 'CANCELLED') {
        const insurerParticipantRegistry = await getParticipantRegistry('org.insurance.Insurer');
        const insureeParticipantRegistry = await getParticipantRegistry('org.insurance.Insuree');
        let insurer = await insurerParticipantRegistry.get(delayInsurancePolicy.insurer.getIdentifier());
        let insuree = await insureeParticipantRegistry.get(delayInsurancePolicy.insuree.getIdentifier());
        checkSuficientFunds(100, delayInsurancePolicy.escrow);
        delayInsurancePolicy.escrow -= 100;
        insurer.balance += 90;
        insuree.balance += 10;
        await insurerParticipantRegistry.update(insurer);
        await insureeParticipantRegistry.update(insuree);
        delayInsurancePolicy.policyState = 'CANCELLED';

    } 
    else if (updatedFlightStatus === 'DELAYED') {
        const insureeParticipantRegistry = await getParticipantRegistry('org.insurance.Insuree');
        let insuree = await insureeParticipantRegistry.get(delayInsurancePolicy.insuree.getIdentifier());
        checkSuficientFunds(100, delayInsurancePolicy.escrow);
        insuree.balance += 100;
        await insureeParticipantRegistry.update(insuree);
        delayInsurancePolicy.escrow -= 100;
        delayInsurancePolicy.policyState = 'PAIDTOINSUREE';
    }
    else if (updatedFlightStatus === 'ONTIME') {
        const insurerParticipantRegistry = await getParticipantRegistry('org.insurance.Insurer');
        let insurer = await insurerParticipantRegistry.get(delayInsurancePolicy.insurer.getIdentifier());
        checkSuficientFunds(100, delayInsurancePolicy.escrow);
        insurer.balance += 100;
        await insurerParticipantRegistry.update(insurer);
        delayInsurancePolicy.escrow -= 100;
        delayInsurancePolicy.policyState = 'PAIDTOINSURER';
    }
    
    // modify asset
    await delayInsuranceAssetRegistry.update(delayInsurancePolicy);

}

function getFlightRecordGroupId( flightDetails ){
    // date = YYYYMMDD string
    let date = flightDetails.departureDate.toISOString().slice(0, 10).replace(/-/g, "");
    let designator = flightDetails.flightDesignator;
    let airport = flightDetails.departureAirport;

    return designator + date + airport;  
}

// Returns error if the amount is negative or bigger than the balance
function checkSuficientFunds(amount, accountFrom){
    if (amount < 0){
        throw new Error("Amount can't be negative");
    }
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

// Returns the first letter Capitalized

function getFirstLetter(word){
    let firstLetter = word.charAt(0);
    return firstLetter.toUpperCase();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



