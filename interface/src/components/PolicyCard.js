import React from 'react';
import { Typography, Card, CardActionArea, CardActions, CardContent, Fab, Button, Grid } from '@material-ui/core/';
import ReloadIcon from '@material-ui/icons/Autorenew';

function PolicyCard(props) {
  return (
    <Card >
    	<CardContent>
        	<Typography variant="h6" component="h2">
        		Policy ID: {props.policy.delayInsurancePolicyId}
          	</Typography>
        	<Fab color="primary" aria-label="Reload" size="small">
        		<ReloadIcon />
      		</Fab>
      		<Typography variant="body2" color="textSecondary" component="p">
        		Payout: ${props.policy.escrow}
      		</Typography>
    	</CardContent>
      	<CardActions>
        	<Button size="small" color="primary" variant="contained">
          		Share
        	</Button>
      	</CardActions>
    </Card>       
  );
}

export default PolicyCard;