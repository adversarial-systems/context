import React from 'react';

import { useStore } from '../../store';
import { nextCard } from '../../actions';
import { Button } from '@material-ui/core';

export const Next = () => {
  const [, dispatch] = useStore();
  return (
     <Button children={"Next"} component="button" onClick={ e => dispatch( nextCard({}) ) }/>
  )
}