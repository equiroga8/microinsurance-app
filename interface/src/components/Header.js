import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core/';

function Header(props) {
  return (
  		<div id={props.idIs}>
        	<Typography  color="inherit" variant="h5">
        	{props.title}
        	</Typography>
        </div>
  );
}

export default Header;