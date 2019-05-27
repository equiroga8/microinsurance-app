import React, {useState, useEffect } from 'react';
import InsurerContent from './InsurerContent';
import Logo from '../assets/insurance.svg';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import { mockInsurer } from '../assets/mock-data';
let request = require('request-promise');

function Insurer() {

  const [refreshInsurer, setRefreshInsurer] = useState(false);
  const [refreshPolicies, setRefreshPolicies] = useState(false)
  const [insurer, setInsurer] = useState(mockInsurer[0]);

  useEffect( () =>{ getInsurer();}, [refreshInsurer]);

  async function getInsurer() {
    console.log("RefreshingInsurer");
    let getOptions = {
      uri: 'http://localhost:3005/api/Insurer/admin%40safeflight.com',
      headers: {
        'Accept': 'application/json'
      },
      json: true
    };
    try {
      let response = await request(getOptions);
      setInsurer(response);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <AppBar position="static" color="secondary" className="app-bar">
          <Toolbar >
          <div className="app-toolbar">       
            <img src={Logo} width= "40" hspace="20" className="logo" alt="logo"/>
              <Typography variant="h5" color="inherit" className="app-title">
                Microinsurance Platform
              </Typography>
              <Typography variant="subtitle2" color="inherit" align="right" className="participant">
                Insurer: {insurer.name}
              </Typography>
              <Typography variant="subtitle2" color="inherit" align="right" className="balance">
                Balance: ${insurer.balance}
              </Typography>
              </div>
          </Toolbar>
      </AppBar>
      <InsurerContent 
        isInsurer={true}
        setRefreshInsurer={setRefreshInsurer}
        refreshInsurer={refreshInsurer} 
        setRefreshPolicies={setRefreshPolicies}
        refreshPolicies={refreshPolicies}
        />  
    </div>
  );
}

export default Insurer;