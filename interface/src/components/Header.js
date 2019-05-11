import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core/';

function Header(props) {
  return (
        <Typography align="center" color="inherit" variant="h6">
        	{props.title}
        </Typography>
  );
}

export default Header;