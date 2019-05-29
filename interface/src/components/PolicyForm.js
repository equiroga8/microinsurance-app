import React, {useState, useEffect} from 'react';
import Header from './Header';
import PolicyInputs from './PolicyInputs';
import PolicyType from './PolicyType';
import { Typography, Button, Card, TextField, MenuItem, CircularProgress } from '@material-ui/core/';
import {mockInsurers} from '../assets/mock-data';
let request = require('request-promise');

function PolicyForm(props) {

	let date = new Date();

	const [insurer, setInsurer] = useState("");
	const [flightDesignator, setFlightDesignator] = useState("");
	const [insurers, setInsurers] = useState(mockInsurers);
	const [departureDate, setDepartureDate] = useState(date.setDate(date.getDate() + 1));
	const [airport, setAirport] = useState("");
	const [loading, setLoading] = useState(false);
	

	useEffect(() => {
		const fetchAllInsurers = async () => {
			let getOptions = {
      	uri: 'http://localhost:3005/api/Insurer',
      		headers: {
        	'Accept': 'application/json'
      	},
      	json: true
   		};
    	try {
	      let response = await request(getOptions);
	      setInsurers(response);
    	} catch (error) {
      	console.log(error);
    	}
  	}
		fetchAllInsurers();
	}, []);

	const onSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		const err = validate();
		if (!err) {
			await createPolicy();
			setInsurer("");
			setFlightDesignator("");
			setDepartureDate(date.setDate(date.getDate() + 1));
			setAirport("");
		}
	};

	const validate = () => {
		let isError = false;
		if (insurer === "" || flightDesignator === "" || airport === ""){
			isError = true;
		}
		return isError;
	}
	
	const createPolicy = async () => {
		var requestOptions = {
        encoding: 'utf8',
        uri: 'http://localhost:3005/api/CreateDelayInsurancePolicy',
        method: 'POST',
        form: {
            "$class": "org.insurance.CreateDelayInsurancePolicy",
					  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
					  "insurer": "resource:org.insurance.Insurer#" + insurer,
					  "flightDesignator": flightDesignator.toUpperCase(),
					  "departureAirport": airport,
					  "departureDate": (new Date(departureDate)).toISOString()
        },
        json: true
    };
  
    try {
      let response = await request(requestOptions);
      props.setRefreshInsuree(!props.refreshInsuree);
      setLoading(false);
      props.setRefreshPolicies(!props.refreshPolicies); 
      if (response.transactionId){
        console.log(response.transactionId);
      }
      
    } catch(error) {
      console.log('ERROR: ' + error);
    }
	}

  	return (
       
        <Card  >
        	<form
        		id= "policy-form"
        	>
			<Header title= "Create a new insurance policy:" idIs="create-policy-header"/>
			<PolicyType id="create-policy-type"/>
			<div id="insurer-input">
	          	<TextField
	          		select
	          		fullWidth
	          		label="Insurer"
	          		required     		
	          		onChange={e => setInsurer(e.target.value)}
	            	value={insurer}
	            	variant="outlined"
	            	margin="normal"
	            >
	          		{
	          			insurers.map((insurer, index) => {
										return <MenuItem key={index} value={insurer.insurerId}>{insurer.name}</MenuItem>
	          			})
	          		}
     			</TextField>
        	</div>
			<PolicyInputs
				flightDesignator={flightDesignator}
				setFlightDesignator={setFlightDesignator}
				airport={airport}
				setAirport={setAirport}
				departureDate={departureDate}
				setDepartureDate={setDepartureDate}
				date={date}
			/>
			<div id="create-policy-button">
			<Button size="large" color="primary" variant="contained"  type="submit" onClick={e => onSubmit(e)} disabled={validate() || loading}>
			  	Create Policy
			</Button>
				{loading && <CircularProgress size={24} id="circular-progress"/>}
			</div>
			<div id="info-premium">
			 <Typography  
			 	color="inherit" variant="subtitle2">*$10 dollars will be discounted from your balance</Typography>
			</div>
			</form>
	     </Card>
        
  	);
}

export default PolicyForm;