import React, {useState} from 'react';
import { Typography, Card, CardActions, CardContent, Fab, Button, Table, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core/';
import ReloadIcon from '@material-ui/icons/Autorenew';
import Websocket from 'react-websocket';
let request = require('request-promise');

function extractId(id){

  console.log(id.substr(id.indexOf('#'), id.lastIndexOf()));
 return id.substr(id.indexOf('#')+1, id.lastIndexOf(id.slice(-1) )); 
}


function PolicyCard(props) {
  
  const [loadingFab, setLoadingFab] = useState(false);
  const [webSocket, setWebSocket] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  async function callOracle() {
    setLoadingFab(true);
    var requestOptions = {
        encoding: 'utf8',
        uri: 'http://localhost:3005/api/CallOracleQuery',
        method: 'POST',
        form: {
            "$class": "org.insurance.CallOracleQuery",
            "flightRecordId": flightRecordId()
        },
        json: true
    };

  
    try {
      let response = await request(requestOptions);
      if (response.transactionId){
        console.log(response.transactionId);
        setWebSocket(true);
      }
      
    } catch(error) {
      console.log('ERROR: ' + error);
    }
  }


  function flightRecordId(){
    // date = YYYYMMDD string
    let date = props.policy.flightDetails.departureDate.substring(0,10).replace(/-/g, "");
    let designator = props.policy.flightDetails.flightDesignator;
    let airport = props.policy.flightDetails.departureAirport;
    console.log(designator + date + airport);
    return designator + date + airport;  
  } 

  function handleQuery(data){
    console.log(typeof JSON.parse(data));
    if (JSON.parse(data).$class === "org.insurance.FlightRecordUpdated"){
      setWebSocket(false);
      updateFlightStatus(); 
    }
  } 

  async function updateFlightStatus(){
    var requestOptions = {
        encoding: 'utf8',
        uri: 'http://localhost:3005/api/UpdateFlightStatus',
        method: 'POST',
        form: {
            "$class": "org.insurance.UpdateFlightStatus",
            "delayInsurancePolicyId": props.policy.delayInsurancePolicyId
        },
        json: true
    };

  
    try {
      let response = await request(requestOptions);
      if (response.transactionId){
        console.log("updating flight status", response.transactionId);
        setLoadingFab(false);
        props.setRefreshPolicies(!props.refreshPolicies);
      }
      
    } catch(error) {
      console.log('ERROR: ' + error);
    }
  }

  function handleButtonClick(){
    setLoadingButton(true);
    let status = props.policy.policyState;
    if (status === "INITIATED"){
      modifydelayInsurancePolicy("AcceptDelayInsurancePolicy");
    } else {
      modifydelayInsurancePolicy("UpdateDelayInsurancePolicy");
    }
  }

  async function modifydelayInsurancePolicy(modifier) {
    var requestOptions = {
        encoding: 'utf8',
        uri: 'http://localhost:3005/api/' + modifier,
        method: 'POST',
        form: {
            "$class": "org.insurance." + modifier,
             "delayInsurancePolicyId": props.policy.delayInsurancePolicyId
        },
        json: true
    };

    try {
      let response = await request(requestOptions);
      if (response.transactionId){
        console.log("modifying policy", response.transactionId);
        setLoadingButton(false);
        props.setRefreshPolicies(!props.refreshPolicies);
        props.setRefreshParticipant(!props.refreshParticipant);
      }
      
    } catch(error) {
      console.log('ERROR: ' + error);
    }
  }

  return (
    <Card className="policy-card" >
    <div className="card-container"> 
    	<CardContent className ="card-content">
          <div className="card-content-container">
        	<Typography variant="h6" className="header-id">
        		Id: {props.policy.delayInsurancePolicyId}
          	</Typography>
          <div className="reload">        
      	     <Fab 
              color="secondary" 
              aria-label="Reload" 
              size="small" 
              disabled={props.reloadDisabled || loadingFab}
              onClick={e => callOracle(e)}
            >
        		    <ReloadIcon />
      		  </Fab>
              {loadingFab && <CircularProgress size={47} className="loadingFab" color="secondary"/>}
          </div>
          <Table className ="info-table">
            <TableBody>
                <TableRow>
                  <TableCell align="justify">Type:</TableCell>
                  <TableCell align="left" padding="none">Flight Delay</TableCell>
                </TableRow>
                
                  {props.isInsurer ? (
                    <TableRow>
                    <TableCell align="justify">Insuree:</TableCell>
                    <TableCell align="left" padding="none">{extractId(props.policy.insuree)}</TableCell>
                    </TableRow>
                    ) : (
                    <TableRow>
                    <TableCell align="justify">Insurer</TableCell>
                    <TableCell align="left" padding="none">{extractId(props.policy.insurer)}</TableCell>
                    </TableRow>
                    )
                  }
                <TableRow>
                  <TableCell align="justify">Potential payout:</TableCell>
                  <TableCell align="left" padding="none">${props.policy.escrow}</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell align="justify">Flight code:</TableCell>
                  <TableCell align="left" padding="none">{props.policy.flightDetails.flightDesignator}</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell align="justify">Departure date:</TableCell>
                  <TableCell align="left" padding="none">{props.policy.flightDetails.departureDate.substring(0,10)}</TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell align="justify">Departure from:</TableCell>
                  <TableCell align="left" padding="none">{props.policy.flightDetails.departureAirport}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="justify">Flight status:</TableCell>
                  <TableCell align="left" padding="none">{props.policy.flightDetails.flightStatus}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </div>
    	</CardContent>
      	<CardActions className="card-actions">
       	  <Button size="medium" color="primary" variant="contained" disabled={props.buttonDisabled || loadingButton} onClick={handleButtonClick}>
          		{props.buttonText ? props.buttonText : "Policy " + props.policy.policyState}
        	</Button>
          {loadingButton && <CircularProgress size={24} className="circular-progress-mod"/>}
      	</CardActions>
    </div> 
    {webSocket && <Websocket url='ws://localhost:3005'
              onMessage={data => {handleQuery(data)}}/>   }
    </Card>      
  );
}

export default PolicyCard;