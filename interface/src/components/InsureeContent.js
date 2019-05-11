import React from 'react';
import PolicyForm from './PolicyForm';
import PolicyList from './PolicyList';
import { Typography, Grid, Paper } from '@material-ui/core/';

function InsureeContent() {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
       <PolicyForm/>
      </Grid>
      <Grid item xs={4}>
        <PolicyList headerTitle="Pending"/>
      </Grid>
      <Grid item xs={4}>
        <PolicyList headerTitle="On going"/>
      </Grid>
      <Grid item xs={4}>
        <PolicyList headerTitle="Finished"/>
      </Grid>
    </Grid>
  );
}

export default InsureeContent;