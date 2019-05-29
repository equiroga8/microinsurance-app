import React from 'react';
import { TextField, MenuItem } from '@material-ui/core/';

function PolicyType() {


  return (
        <div id="input-select">
          <TextField
	          		select
	          		fullWidth
	          		label="Policy Type"
	          		required
	          		
	            	value="Flight Delay"
	            	variant="outlined"
	            	margin="normal"
	            >
	          		{
	          			["Flight Delay", "Crops"].map((policyType, index) => {
							return <MenuItem key={index} value={policyType}>{policyType}</MenuItem>
	          			})
	          		}
     			</TextField>
        </div>
  );
}

export default PolicyType;