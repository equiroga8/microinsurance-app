import React from 'react';
import {AppBar, Button} from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ReloadIcon from '@material-ui/icons/Autorenew';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';

function Insurer() {
  return (
    <div>
  	 <div>
      <AppBar position="static" color="primary">
        <Toolbar>
       
        <img src="https://edu-quiroga.neocities.org/insurance.png" width= "40" hspace="20"/>
          <Typography variant="h5" color="inherit">
             Microinsurance Platform
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
    <Paper>
     <Typography gutterBottom variant="h6" >
            Pending
     </Typography>
    <Card >
      <CardActionArea>
        
        <CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
        	<Grid item sm={10}>
	        	<Typography variant="h6" component="h2">
	        		Delay Insurance Policy
	          	</Typography>
          	</Grid>
          	<Grid item sm={2}>
	        	<Fab color="primary" aria-label="Reload" size="small">
	        		<ReloadIcon />
	      		</Fab>
      		</Grid>
      	</Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
    </Paper>
    </div>
  );
}

export default Insurer;