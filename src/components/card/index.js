import React from 'react';

// import { useStore } from '../../store';
// import { rescoreCard, persistLocal } from '../../actions';

import { Card as MCard} from '@material-ui/core';


export const Card = (props) => {
  const { children } = props;
  return (
    <MCard className={props.className}>
      {children}
    </MCard>
  )
}