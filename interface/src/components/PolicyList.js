import React from 'react';
import Header from './Header';
import { GridList, GridListTile, Typography } from '@material-ui/core/';
import PolicyCard from './PolicyCard';

function PolicyList(props) {
  return (
  	<div id={props.idIs}>
	  	 	
	        <GridList spacing={24} cols={1} id="policylist">
	         <GridListTile key="Subheader" style={{ height: 'auto' }}>
          		<Header title={props.headerTitle} align="center" />
        	</GridListTile>

						{props.policyList.length === 0 ? (
                    <Typography align="center">This list is empty</Typography>
                    ) : (
                    	props.policyList.map((policy, index) => {
						          	return <GridListTile key={index} style={{ height: 'auto', width: 'auto'}}>
						          	 <PolicyCard 
						          	 	key={index} 
						          	 	policy={policy}
						          	 	buttonDisabled={props.buttonDisabled} 
						          	 	reloadDisabled={props.reloadDisabled}
						          	 	buttonText={props.buttonText}
						          	 	isInsurer={props.isInsurer}
						          	 	setRefreshPolicies={props.setRefreshPolicies}
						          	 	refreshPolicies={props.refreshPolicies}
						          	 	setRefreshParticipant={props.setRefreshParticipant}
						          	 	refreshParticipant={props.refreshParticipant}
						          	 /> 
						          	</GridListTile>
	          					})
                    )
                  }
	        </GridList>
    </div>    
  );
}

export default PolicyList;