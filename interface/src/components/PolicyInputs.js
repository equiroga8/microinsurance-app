import React from 'react';
import { Typography, Grid, TextField, FormControlLabel, FormControl, Select, MenuItem, FormHelperText, InputLabel } from '@material-ui/core/';
import { MuiPickersUtilsProvider, InlineDatePicker } from "material-ui-pickers";
import DateFnsUtils from '@date-io/date-fns';
import {airports} from '../assets/mock-data';

function PolicyInputs(props) {
  return (
    <React.Fragment>
			<FormControl>
	          	<TextField required id="flight-designator" label="Flight designator" autoComplete="no" />
			</FormControl>
			    <div className="picker">
			    	<MuiPickersUtilsProvider utils={DateFnsUtils}>
        				<InlineDatePicker
					        keyboard
					        clearable
					        variant="outlined"
					        label="With keyboard"
					        value={new Date()}
					        onChange={console.log}					        
       						mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
        				/>
       				 </MuiPickersUtilsProvider>
      			</div>

	      	<FormControl required>
      			<InputLabel htmlFor="age-required">Departure airport</InputLabel>
	          	<Select
	            	value={"Madrid"}
	            	onChange={console.log}
	            	name="departureAirport"
	            	inputProps={{
	              		id: 'age-required',
	            	}}
	          	>
	          		<MenuItem value=""><em>None</em></MenuItem>
	          		{
	          			airports.map((airport, index) => {
							return <MenuItem key={index} value={airport.code}>{airport.name}</MenuItem>
	          			})
	          		}
     			</Select>
      			<FormHelperText>Required</FormHelperText>
        	</FormControl>
	        <FormControl>
	         	<Typography> Premium: $50</Typography>
	        </FormControl>
    </React.Fragment>
  );
}

export default PolicyInputs;
