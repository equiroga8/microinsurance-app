import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core/';

function Header(props) {
  return (
  		<div id={props.idIs}>
        	<Typography align="center" color="inherit" variant="h6">
        	{props.title}
        	</Typography>
        </div>
  );
}

export default Header;