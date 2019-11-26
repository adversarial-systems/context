import React from 'react';

import { Card as MCard } from '@material-ui/core';

export const Card = (props) => {
  const { children } = props;
  return (
    <MCard className={props.className}>
      {children}
    </MCard>
  )
}