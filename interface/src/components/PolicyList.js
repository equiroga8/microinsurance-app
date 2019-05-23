import React from 'react';
import Header from './Header';
import { Typography, Grid, Paper, GridList, GridListTile, ListSubheader } from '@material-ui/core/';
import PolicyCard from './PolicyCard';

function PolicyList(props) {
  return (
  	<div id={props.idIs}>
	  	 	
	        <GridList spacing={24} cols={1} id="policylist">
	         <GridListTile key="Subheader" style={{ height: 'auto' }}>
          		<Header title={props.headerTitle} />
        	</GridListTile>
	          {props.policyList.map((policy, index) => {
	          	return <GridListTile key={index} style={{ height: 'auto', width: '424px'}}>
	          	 <PolicyCard 
	          	 	key={index} 
	          	 	policy={policy}
	          	 	buttonDisabled={props.buttonDisabled} 
	          	 	reloadDisabled={props.reloadDisabled}
	          	 	buttonText={props.buttonText}
	          	 	isInsurer={props.isInsurer}
	          	 	/> 
	          	</GridListTile>
	          })}
	        </GridList>
    </div>    
  );
}

export default PolicyList;