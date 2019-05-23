import React from 'react';
import InsureeContent from './InsureeContent';
import Logo from '../assets/insurance.svg';
import { AppBar, Toolbar, Typography, Grid, Paper, Button } from '@material-ui/core/';
import { mockInsuree } from '../assets/mock-data';

function Insuree() {
  return (
    <div>
    	<AppBar position="static" color="primary" className="app-bar">
        	<Toolbar >
          <div className="app-toolbar">       
        		<img src={Logo} width= "40" hspace="20" className="logo"/>
          		<Typography variant="h5" color="inherit" className="app-title">
             		Microinsurance Platform
          		</Typography>
          		<Typography variant="subtitle2" color="inherit" align="right" className="participant">
             		Insuree: {mockInsuree[0].firstName}
          		</Typography>
              <Typography variant="subtitle2" color="inherit" align="right" className="balance">
                Balance: ${mockInsuree[0].balance}
              </Typography>
              </div>
        	</Toolbar>
     	</AppBar>
     	<InsureeContent isInsurer={false}/>	
    </div>
  );
}

export default Insuree;