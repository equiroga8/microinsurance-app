import React, {useState} from 'react';
import Header from './Header';
import PolicyInputs from './PolicyInputs';
import PolicyType from './PolicyType';
import { Typography, Grid, Paper, Button, Card, TextField, MenuItem } from '@material-ui/core/';
import { unstable_Box as Box } from '@material-ui/core/Box';
import {mockInsurers} from '../assets/mock-data';

function PolicyForm() {

const [insurer, setInsurer] = useState("");
const [textInputRef, setTextInputRef] = useState(null);
const selectInsurer = value => {
    	setInsurer(value);
  	};	
  return (
       
        <Card id= "policy-form" >
			<Header title= "Create a new insurance policy:" idIs="create-policy-header"/>
			<PolicyType id="create-policy-type"/>
			<div id="insurer-input">
	          	<TextField
	          		select
	          		fullWidth
	          		label="Insurer"
	          		required
	          		inputRef={ref => setTextInputRef(ref)}
	          		onChange={e => selectInsurer(e.target.value)}
	            	value={insurer}
	            	variant="outlined"
	            	margin="normal"
	            >
	          		{
	          			mockInsurers.map((insurer, index) => {
							return <MenuItem key={index} value={insurer.insurerId}>{insurer.name}</MenuItem>
	          			})
	          		}
     			</TextField>
        	</div>
			<PolicyInputs/>
			<Button size="large" color="primary" variant="contained" id="create-policy-button">
			  	Create
			</Button>
			<div id="info-premium">
			 <Typography  
			 	color="inherit" variant="subtitle2">*$10 dollars will be discounted from your balance</Typography>
			</div>
	     </Card>
        
  );
}

export default PolicyForm;