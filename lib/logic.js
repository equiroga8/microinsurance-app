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
 * @param {org.insurance.delay.AccountTransfer} tx
 * @transaction
 */
async function accountTransfer(tx) {

    // Update the assets with the new values.
    tx.from.balance -=  tx.ammount;
    tx.to.balance +=  tx.ammount;
    

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.insurance.delay.Account');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.to);
    await assetRegistry.update(tx.from);
}
