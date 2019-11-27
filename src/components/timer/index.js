import React, { useEffect } from 'react';
import { useStore } from '../../store';
import { advanceTime, persistLocal, delayTimer, ageCreated } from '../../actions';
import { useInterval } from '../../hooks';
import { Card, Slider } from '@material-ui/core';

export const Timer = () => {
  const [{chrono: { delay, daysFromCreation } = {delay: 5, daysFromCreation: 0.0 }}, dispatch] = useStore();

  useEffect(() => {
    dispatch(advanceTime({}));
  },[dispatch])

  useInterval(() => {
    dispatch(persistLocal({}));
    dispatch(advanceTime({}));
  },delay)

  const handleDelayChange = (value) => {
    dispatch(delayTimer({ delay: value || 10 }));
    dispatch(persistLocal({}));
    dispatch(ageCreated({adjustment: 1000000}));
  }

  return (
    <Card padding={2}>
     {false &&  <div>
        Time from start: {`${(daysFromCreation/1).toFixed(0)}d:${((daysFromCreation*24)%24).toFixed(0)}h:${((daysFromCreation*3600)%60).toFixed(0)}m:${((daysFromCreation*86400)%60).toFixed(0)}s`}
      </div>
     }
      <Slider value={delay} min={1} max={15} valueLabelDisplay="auto"
  aria-labelledby="range-slider" onChange={(e,value) => { handleDelayChange(value); }}/>
    </Card>
  )
}