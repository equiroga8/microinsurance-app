import React from 'react';
import PolicyForm from './PolicyForm';
import PolicyList from './PolicyList';
import { Typography, Grid, Paper } from '@material-ui/core/';
import {mockInsureePolicies} from '../assets/mock-data';

function getPoliciesByStatus(status){ //Optimize method
  let policyList = [];
  for(let policy of mockInsureePolicies){
    if (policy.policyState === status) {
      policyList.push(policy);
    }
  }
  return policyList;
}

function InsureeContent() {
  return (
    <Grid container spacing={8}>
      <Grid item xs={8}>
       <PolicyForm />
      </Grid>
      <Grid item xs={4}>
        <PolicyList headerTitle="Pending" policyList={getPoliciesByStatus("INITIATED")}/>
      </Grid>
      <Grid item xs={4}>
        <PolicyList headerTitle="On going" policyList={getPoliciesByStatus("PENDING")}/>
      </Grid>
      <Grid item xs={4}>
        <PolicyList headerTitle="Finished" policyList={getPoliciesByStatus("CANCELLED")}/>
      </Grid>
    </Grid>
  );
}

export default InsureeContent;