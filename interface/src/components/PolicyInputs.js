import React from 'react';
import { TextField, FormControl, MenuItem } from '@material-ui/core/';
import { MuiPickersUtilsProvider, InlineDatePicker } from "material-ui-pickers";
import DateFnsUtils from '@date-io/date-fns';
import {airports} from '../assets/mock-data';

function PolicyInputs(props) {

  return (

    <div id="form-inputs-item">
		<div id="form-inputs-container">
			<FormControl id="flight-designator-input">
	          	<TextField  
	          		variant="outlined" 
	          		required
	          		value={props.flightDesignator}
					onChange={e => props.setFlightDesignator(e.target.value)} 
	          		id="flight-designator" 
	          		label="Flight designator" 
	          		autoComplete="off" 
	          	/>
			</FormControl>
			<FormControl id="date-input">
			    <div className="picker">
			    	<MuiPickersUtilsProvider utils={DateFnsUtils}>
        				<InlineDatePicker
        					minDate={new Date().setDate(props.date.getDate())}
        					maxDate={new Date().setDate(props.date.getDate() + 7)}
					        keyboard
					        clearable
					        variant="outlined"
					        label="Departure Date"
					        value={props.departureDate}
					        onChange={props.setDepartureDate}
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
	          		onChange={e => props.setAirport(e.target.value)}
	            	value={props.airport}
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
