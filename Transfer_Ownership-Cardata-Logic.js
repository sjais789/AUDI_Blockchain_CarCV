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

/**
 * Track the transfer of a car data from one customer to another customer (seller to  buyer)
 * @param {org.acme.transfering.Transfer} transfer - the transfer to be processed
 * @transaction
 */
function transferthedata(transfer) {

  
    transfer.cardetails.owner = transfer.newOwner;
   

 return getAssetRegistry('org.acme.transfering.Cardetails')
      


  .then(function (assetRegistry) {

           
      var transferNotification = getFactory().newEvent('org.acme.transfering', 'TransferNotification');

      transferNotification.cardetails = transfer.cardetails;
      
emit(transferNotification);                          //Transfer_notification event
      
return assetRegistry.update(transfer.cardetails);
        });
}