import React from 'react';
import Header from './Header';
import { Typography, Grid, Paper, GridList } from '@material-ui/core/';
import PolicyCard from './PolicyCard';

function PolicyList(props) {
  return (
  	<Paper>
  		<Grid container justify='center' alignItems='center'>
  		<Grid item>
	  	 	<Header title={props.headerTitle} />
	        <GridList justify='center'>
	          {props.policyList.map((policy, index) => {
	          	return <PolicyCard key={index} policy={policy}/>
	          })}
	        </GridList>
	        </Grid>
        </Grid>
    </Paper>    
  );
}

export default PolicyList;