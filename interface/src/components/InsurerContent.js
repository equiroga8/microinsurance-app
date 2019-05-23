import React from 'react';
import PolicyForm from './PolicyForm';
import PolicyList from './PolicyList';
import { Typography, Grid, Paper } from '@material-ui/core/';
import {mockInsurerPolicies} from '../assets/mock-data';

function getPoliciesByStatus(statuses){ //Optimize method
  let policyList = [];
  for(let policy of mockInsurerPolicies){
    for(let status of statuses){
    if (policy.policyState === status) {
      policyList.push(policy);
    }
  }
  }
  return policyList;
}

function InsurerContent(props) {
  return (
      <div id="app-container"> 

        <PolicyList 
          idIs="pl-pending" 
          headerTitle="Not accepted" 
          policyList={getPoliciesByStatus(["INITIATED"])} 
          buttonDisabled={false} reloadDisabled={false} 
          buttonText="Accept policy" isInsurer={props.isInsurer}
        />
   
        <PolicyList 
          idIs="pl-ongoing" 
          headerTitle="On going" 
          policyList={getPoliciesByStatus(["PENDING"])} 
          buttonDisabled={false} reloadDisabled={false} 
          buttonText="Finalize policy" 
          isInsurer={props.isInsurer}
        />
        
        <PolicyList 
          idIs="pl-finished" 
          headerTitle="Finished" 
          policyList={getPoliciesByStatus(["CANCELLED","PAIDTOINSUREE", "PAIDTOINSURER"])} 
          buttonDisabled={true} 
          reloadDisabled={true} 
          buttonText={false} 
          isInsurer={props.isInsurer}
        />

    </div>      
  );
}

export default InsurerContent;