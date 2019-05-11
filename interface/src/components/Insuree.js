import React from 'react';
import InsureeContent from './InsureeContent';
import Logo from '../assets/insurance.svg';
import { AppBar, Toolbar, Typography, Grid, Paper, Button } from '@material-ui/core/';

function Insuree() {
  return (
    <div>
    	<AppBar position="static" color="primary" className="app-bar">
        	<Toolbar>       
        		<img src={Logo} width= "40" hspace="20"/>
          		<Typography variant="h5" color="inherit">
             		Microinsurance Platform
          		</Typography>
          		<Typography variant="subtitle1" color="inherit" align="right">
             		Insuree: John | Balance: $50
          		</Typography>
        	</Toolbar>
     	</AppBar>
     	<InsureeContent />	
    </div>
  );
}

export default Insuree;