import React, { useState } from 'react';

import { useStore } from '../../store';
import { nextNCards, currentAperture } from '../../actions';
import { Button, Paper, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  slidersContainer: {
    width:'20rem',
  },
})


export const Next = () => {
  const classes = useStyles();
  const [{visited, aperture={ position:1 }}, dispatch] = useStore();
  const [number, setNumber] = useState(6);
  const [position, setPosition] = useState(aperture.position)
 

  return (
    <Paper className={classes.slidersContainer}>
      <Button children={"Next"} component="button" onClick={ e => dispatch( nextNCards({ n: number }) ) }/>
      <Slider value={number} min={1} max={10} valueLabelDisplay="auto"
  aria-labelledby="range-slider" onChange={(e,value) => { setNumber(value); }}/>
      <Slider value={position} min={1} max={(visited.length/6) +1} valueLabelDisplay="auto"
  aria-labelledby="range-slider" onChange={(e,value) => { setPosition(value);dispatch( currentAperture({ position: value }) ) }} />
    </Paper>
  )
}