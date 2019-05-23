import React from 'react';
import InsurerContent from './InsurerContent';
import Logo from '../assets/insurance.svg';
import { AppBar, Toolbar, Typography, Grid, Paper, Button } from '@material-ui/core/';
import { mockInsurer } from '../assets/mock-data';

function Insurer() {
  return (
    <div>
      <AppBar position="static" color="secondary" className="app-bar">
          <Toolbar >
          <div className="app-toolbar">       
            <img src={Logo} width= "40" hspace="20" className="logo"/>
              <Typography variant="h5" color="inherit" className="app-title">
                Microinsurance Platform
              </Typography>
              <Typography variant="subtitle2" color="inherit" align="right" className="participant">
                Insurer: {mockInsurer[0].name}
              </Typography>
              <Typography variant="subtitle2" color="inherit" align="right" className="balance">
                Balance: ${mockInsurer[0].balance}
              </Typography>
              </div>
          </Toolbar>
      </AppBar>
      <InsurerContent isInsurer={true}/>  
    </div>
  );
}

export default Insurer;