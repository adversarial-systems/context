import React, { useEffect } from 'react';
import { useStore } from '../../store';
import { advanceTime, persistLocal, delayTimer } from '../../actions';
import { useInterval } from '../../hooks';

export const Timer = () => {
  const [{chrono: { delay, daysFromCreation }}, dispatch] = useStore();

  useEffect(() => {
    dispatch(advanceTime({}));
  },[dispatch])

  useInterval(() => {
    dispatch(advanceTime({}));
    dispatch(persistLocal({}));
  },delay)

  const handleDelayChange = (e) => {
    dispatch(delayTimer({ delay: e.currentTarget.value || 10 }));
    dispatch(persistLocal({}));
  }

  return (
    <div>
     {false &&  <div>
        Time from start: {`${(daysFromCreation/1).toFixed(0)}d:${((daysFromCreation*24)%24).toFixed(0)}h:${((daysFromCreation*3600)%60).toFixed(0)}m:${((daysFromCreation*86400)%60).toFixed(0)}s`}
      </div>
     }
      <input type="range" min="1" max="15" onChange={handleDelayChange} defaultValue={(delay)}></input>
      {` ${delay}`}
    </div>
  )
}