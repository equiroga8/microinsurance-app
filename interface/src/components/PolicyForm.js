import React from 'react';
import Header from './Header';
import PolicyInputs from './PolicyInputs';
import { Typography, Grid, Paper, Button } from '@material-ui/core/';

function PolicyForm() {
  return (
        <Paper>
          <Header title= "Create a new policy"/>
          <PolicyInputs />
          <Button size="small" color="primary" variant="contained">
          Create
        </Button>
        </Paper>
  );
}

export default PolicyForm;