import React from 'react';
import { Typography, Grid, TextField, FormControlLabel, Checkbox } from '@material-ui/core/';

function PolicyInputs() {
  return (
    <React.Fragment>
      	<Typography variant="h6" gutterBottom>
        	Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} xs={6}>
          <TextField required id="cardName" label="Flight designator"  />
        </Grid>
        <Grid item xs={12} xs={6}>
          <TextField required id="cardNumber" label="Departure date"  />
        </Grid>
        <Grid item xs={12} xs={6}>
          <TextField required id="expDate" label="Departure airport" />
        </Grid>
        <Grid item xs={12} xs={6}>
         <Typography> Premium: $50</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PolicyInputs;