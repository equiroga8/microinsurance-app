import React, { useState } from 'react';
import { Typography, Grid, Paper, Button, FormControl, TextField, MenuItem } from '@material-ui/core/';

function PolicyType() {

		const [textInputRef, setTextInputRef] = useState(null);

  return (
        <div id="input-select">
          <TextField
	          		select
	          		fullWidth
	          		label="Policy Type"
	          		required
	          		inputRef={ref => setTextInputRef(ref)}
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