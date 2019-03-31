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
 t: Model violation in instance org.insurance.delay.Account#6849 field balance has value Non-numeric (unknown) expected type Double
 */
/**
 * Sample transaction
 * @param {org.insurance.delay.CreateInsurancePolicy} tx
 * @transaction
 */
async function createInsurancePolicy(tx) {

    // Get the asset registry for the asset.
    const insuranceAssetRegistry = await getAssetRegistry('org.insurance.delay.InsurancePolicy');
    // Update the asset in the asset registry.
    let factory = await getFactory();
    let insurancePolicy = factory.newResource('org.insurance.delay', 'InsurancePolicy', '1');
    let flightDetails = factory.newConcept('org.insurance.delay', 'FlightDetails');

    const flightDetailsProperties = {
        flightStatus: 'Undefined',
        flightDesignator: tx.flightDesignator,
        departureDate: tx.departureDate,
        departureAirport: tx.departureAirport
    };
    Object.assign(flightDetails, flightDetailsProperties);
    const insurancePolicyProperties = {
        escrow: 10,
        insurer: tx.insurer,
        insuree: tx.insuree,
        policyState: 'Initiated',
        flightDetails: flightDetails
    };
    Object.assign(insurancePolicy, insurancePolicyProperties);

    await insuranceAssetRegistry.add(insurancePolicy);

}
