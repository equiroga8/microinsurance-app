import React from 'react';
import { Typography } from '@material-ui/core/';

function Header(props) {
  return (
  		<div id={props.idIs}>
        	<Typography  color="inherit" variant="h5" align={props.align}>
        	{props.title}
        	</Typography>
        </div>
  );
}

export default Header;