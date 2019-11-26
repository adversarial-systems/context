import React, { useState } from 'react';

import { useStore } from '../../store';
import { nextNCards } from '../../actions';
import { Button, Paper, Slider } from '@material-ui/core';



export const Next = () => {

  const [, dispatch] = useStore();
  const [number, setNumber] = useState(1);

  return (
    <Paper>
      <Button children={"Next"} component="button" onClick={ e => dispatch( nextNCards({ n: number }) ) }/>
      <Slider min={1} max={10} valueLabelDisplay="auto"
  aria-labelledby="range-slider" onChange={(e,value) => { setNumber(value); }}/>
    </Paper>
  )
}