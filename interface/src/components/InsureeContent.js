import React from 'react';
import PolicyForm from './PolicyForm';
import PolicyList from './PolicyList';
import { Typography, Grid, Paper } from '@material-ui/core/';
import {mockInsureePolicies} from '../assets/mock-data';

function getPoliciesByStatus(statuses){ //Optimize method
  let policyList = [];
  for(let policy of mockInsureePolicies){
    for(let status of statuses){
    if (policy.policyState === status) {
      policyList.push(policy);
    }
  }
  }
  return policyList;
}

function InsureeContent() {
  return (
      <div id="app-container"> 
        <div id="create-form-item"> 
        <PolicyForm />
        </div>

        <PolicyList idIs="pl-pending" headerTitle="Pending" policyList={getPoliciesByStatus(["INITIATED"])} buttonDisabled={true} reloadDisabled={false}/>
   
        <PolicyList idIs="pl-ongoing" headerTitle="On going" policyList={getPoliciesByStatus(["PENDING"])} buttonDisabled={false} reloadDisabled={false}/>
        
        <PolicyList idIs="pl-finished" headerTitle="Finished" policyList={getPoliciesByStatus(["CANCELLED","PAIDTOINSUREE", "PAIDTOINSURER"])} buttonDisabled={true} reloadDisabled={true}/>

    </div>      
  );
}

export default InsureeContent;