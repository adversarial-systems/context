import React, { useState, useEffect } from 'react';

import { useStore } from '../../store';
import { nextNCards, aperturePosition, apertureSize } from '../../actions';
import { Button, Paper, Slider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  slidersContainer: {
    width:'20rem',
  },
})


export const Next = () => {
  const classes = useStyles();
  const [{visited, aperture: { position: aperture_position = 1, size: aperture_size = 6 }}, dispatch] = useStore();
  const [position, setPosition] = useState(aperture_position);
  const [size, setSize] = useState(aperture_size)

  useEffect(()=>{
    setPosition(aperture_position)
  },[aperture_position])

   useEffect(()=>{
    setSize(aperture_size)
  },[aperture_size])
 

  return (
    <Paper className={classes.slidersContainer}>
      <Typography children={'aperture_position'}  color="textSecondary" gutterBottom/>   
      <Slider value={position} min={1} max={(visited.length/aperture_size) +1} valueLabelDisplay="auto"
  aria-labelledby="range-slider" onChange={(e,value) => { setPosition(value);dispatch( aperturePosition({ position: value }) ) }} />
      <Typography children={'aperture_size'}  color="textSecondary" gutterBottom/>   
      <Slider value={size} min={1} max={6} valueLabelDisplay="auto"
  aria-labelledby="range-slider" onChange={(e,value) => { setSize(value);dispatch( apertureSize({ size: value }) ) }} />
    </Paper>
  )
}