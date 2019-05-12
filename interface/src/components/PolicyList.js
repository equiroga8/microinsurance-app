import React from 'react';
import Header from './Header';
import { Typography, Grid, Paper } from '@material-ui/core/';
import PolicyCard from './PolicyCard';

function PolicyList(props) {
  return (
        <Paper>
          <Header title={props.headerTitle} />
          {props.policyList.map((policy, index) => {
          	return <PolicyCard key={index} policy={policy}/>
          })}
        </Paper>
  );
}

export default PolicyList;