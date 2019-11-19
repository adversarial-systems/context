import React from 'react';

import { useStore } from '../../store';
import { addItem } from '../../actions';
import { Button } from '@material-ui/core';

export const Puller = () => {
  const [{state}, dispatch] = useStore();
  if(!state) return
  return (
     <Button children={"Add"} component="button" onClick={ e => dispatch( addItem({ srs: { today: false} }) ) }/>
  )
}