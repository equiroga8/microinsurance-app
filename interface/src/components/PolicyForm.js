import React from 'react';
import Header from './Header';
import PolicyInputs from './PolicyInputs';
import PolicyType from './PolicyType';
import { Typography, Grid, Paper, Button, Card, TextField } from '@material-ui/core/';
import { unstable_Box as Box } from '@material-ui/core/Box';

function PolicyForm() {
  return (
       
        <div id= "policy-form" >
			<Header title= "Create a new insurance policy:" idIs="create-policy-header"/>
			<PolicyType id="create-policy-type"/>
			<PolicyInputs/>
			<Button size="large" color="primary" variant="contained" id="create-policy-button">
			  	Create
			</Button>
			<div id="info-premium">
			 <TextField  
			 	variant="outlined" 
			 	disabled
			 	placeHolder="Premium $50"
			 	label="Premium: $50" 
			 	autoComplete="no">  </TextField>
			</div>
	     </div>
        
  );
}

export default PolicyForm;