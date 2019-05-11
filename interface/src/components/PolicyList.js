import React from 'react';
import Header from './Header';
import { Typography, Grid, Paper } from '@material-ui/core/';

function PolicyList(props) {
  return (
        <Paper>
          <Header title={props.headerTitle} />
        </Paper>
  );
}

export default PolicyList;