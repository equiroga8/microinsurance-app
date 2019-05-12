import React from 'react';
import { Typography, Card, CardActionArea, CardActions, CardContent, Fab, Button } from '@material-ui/core/';
import ReloadIcon from '@material-ui/icons/Autorenew';

function PolicyCard(props) {
  return (
    <Card >
    	<CardActionArea>
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
      	</CardActionArea>
      	<CardActions>
        	<Button size="small" color="primary" variant="contained">
          		Share
        	</Button>
        	<Button size="small" color="primary" disabled={false}>
          		Learn More
        	</Button>
      	</CardActions>
    </Card>       
  );
}

export default PolicyCard;