import React from 'react';
import { Typography, Card, CardActionArea, CardActions, CardContent, Fab, Button, Grid, Table, TableBody, TableRow, TableCell } from '@material-ui/core/';
import ReloadIcon from '@material-ui/icons/Autorenew';

function extractId(id){

  console.log(id.substr(id.indexOf('#'), id.lastIndexOf()));
 return id.substr(id.indexOf('#')+1, id.lastIndexOf(id.slice(-1) )); 
}


function PolicyCard(props) {
  console.log(props.policy.insurer)
  return (
    <Card >
    <div className="card-container"> 
    	<CardContent className ="card-content">
          <div className="card-content-container">
        	<Typography variant="h6" className="header-id">
        		Id: {props.policy.delayInsurancePolicyId}
          	</Typography>
          <div className="reload">        
      	     <Fab color="secondary" aria-label="Reload" size="small" disabled={props.reloadDisabled}>
        		    <ReloadIcon />
      		    </Fab>
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
       	  <Button size="medium" color="primary" variant="contained" disabled={props.buttonDisabled}>
          		{props.buttonText ? props.buttonText : "Policy " + props.policy.policyState}
        	</Button>
      	</CardActions>
    </div>    
    </Card>       
  );
}

export default PolicyCard;