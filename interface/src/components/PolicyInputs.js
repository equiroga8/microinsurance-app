import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Typography, Grid, TextField, FormControlLabel, FormControl, MenuItem, FormHelperText, InputLabel, OutlinedInput } from '@material-ui/core/';
import { MuiPickersUtilsProvider, InlineDatePicker } from "material-ui-pickers";
import DateFnsUtils from '@date-io/date-fns';
import {airports, mockInsurers} from '../assets/mock-data';

function PolicyInputs(props) {
	let date = new Date();
	const [selectedDate, handleDateChange] = useState(date.setDate(date.getDate() + 1));
	const [airport, setAirport] = useState("");
	const [textInputRef, setTextInputRef] = useState(null);

	const selectAirport = value => {
    	setAirport(value);
  	};

  return (
    <div id="form-inputs-item">
		<div id="form-inputs-container">
			<FormControl id="flight-designator-input">
	          	<TextField  variant="outlined" required id="flight-designator" label="Flight designator" autoComplete="no" />
			</FormControl>
			<FormControl id="date-input">
			    <div className="picker">
			    	<MuiPickersUtilsProvider utils={DateFnsUtils}>
        				<InlineDatePicker
        					minDate={date}
        					maxDate={new Date().setDate(date.getDate() + 14)}
					        keyboard
					        clearable
					        variant="outlined"
					        label="Departure Date"
					        value={selectedDate}
					        onChange={handleDateChange}
					        format="dd.MM.yyyy"
       						mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
        				/>
       				 </MuiPickersUtilsProvider>
      			</div>
			</FormControl>
	      	<div id="departure-airport-input">
	          	<TextField
	          		select
	          		fullWidth
	          		label="Departure Airport"
	          		required
	          		inputRef={ref => setTextInputRef(ref)}
	          		onChange={e => selectAirport(e.target.value)}
	            	value={airport}
	            	variant="outlined"
	            	margin="normal"
	            >
	          		{
	          			airports.map((airport, index) => {
							return <MenuItem key={index} value={airport.code}>{airport.name}</MenuItem>
	          			})
	          		}
     			</TextField>
        	</div>
        </div>	
    </div>
  );
}

export default PolicyInputs;
