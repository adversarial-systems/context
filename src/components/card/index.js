import React from 'react';

import { Paper } from '@material-ui/core';

export const Card = (props) => {
  const { children } = props;
  return (
    <Paper justify="space-around">
      {children}
    </Paper>
  )
}