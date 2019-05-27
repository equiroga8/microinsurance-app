import React, {useState, useEffect } from 'react';
import InsureeContent from './InsureeContent';
import Logo from '../assets/insurance.svg';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import { mockInsuree } from '../assets/mock-data';
let request = require('request-promise');

function Insuree() {

  const [refreshInsuree, setRefreshInsuree] = useState(false);
  const [refreshPolicies, setRefreshPolicies] = useState(false)
  const [insuree, setInsuree] = useState(mockInsuree[0]);

  useEffect( () =>{ getInsuree();}, [refreshInsuree]);

  async function getInsuree() {
    console.log("RefreshingInsuree");
    let getOptions = {
      uri: 'http://localhost:3005/api/Insuree/john%40jmail.com',
      headers: {
        'Accept': 'application/json'
      },
      json: true
    };
    try {
      let response = await request(getOptions);
      setInsuree(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
    	<AppBar position="static" color="primary" className="app-bar">
        	<Toolbar >
          <div className="app-toolbar">       
        		<img src={Logo} width= "40" hspace="20" className="logo" alt="logo"/>
          		<Typography variant="h5" color="inherit" className="app-title">
             		Microinsurance Platform
          		</Typography>
          		<Typography variant="subtitle2" color="inherit" align="right" className="participant">
             		Insuree: {insuree.firstName}
          		</Typography>
              <Typography variant="subtitle2" color="inherit" align="right" className="balance">
                Balance: ${insuree.balance}
              </Typography>
              </div>
        	</Toolbar>
     	</AppBar>
     	<InsureeContent 
        isInsurer={false} 
        setRefreshInsuree={setRefreshInsuree}
        refreshInsuree={refreshInsuree} 
        setRefreshPolicies={setRefreshPolicies}
        refreshPolicies={refreshPolicies}
      />	
    </div>
  );
}

export default Insuree;