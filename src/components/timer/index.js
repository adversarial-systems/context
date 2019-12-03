import React, { useEffect } from 'react';
import { useStore } from '../../store';
import { advanceTime, persistLocal, delayTimer, ageCreated } from '../../actions';
import { useInterval } from '../../hooks';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  slider: {
    width:  185,
  },
})
export const Timer = () => {
  const [{chrono: { delay } = {delay: 5, daysFromCreation: 0 }}, dispatch] = useStore();
  const classes = useStyles();

  useEffect(() => {
    dispatch(advanceTime({}));
  },[dispatch])

  useInterval(() => {
    dispatch(persistLocal({}));
    dispatch(advanceTime({}));
  },delay)

  const handleDelayChange = async (value) => {
    await dispatch(delayTimer({ delay: value || 10 }));
    await dispatch(ageCreated({adjustment: 1000000}));
    await dispatch(persistLocal({}));
  }

  return (

      <Slider className={classes.slider} value={delay} min={1} max={15} valueLabelDisplay="auto"
  aria-labelledby="range-slider" onChange={(e,value) => { handleDelayChange(value); }}/>
 
  )
}