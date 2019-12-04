import React, { useState } from 'react';

import { useStore } from '../../store';
import { rescoreCard, persistLocal } from '../../actions';

import { Box, CardContent } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Square from '../../icons/Square';

const labels = {
  1: 'Nothing',
  2: 'Inadequate',
  3: 'Adequate',
  4: 'Ok',
  5: 'Good',
  6: 'Excellent',
};

const defaultIcon = <Square fontSize="inherit" />;

export const Score = (props) => {
  const [{ visited }, dispatch] = useStore();
  const { card: { id, sm2 }} = props;
  const [hover, setHover] = useState(-1);

  const scoreCard = async ({id, value=2.5, visited, dispatch}) => {
    const match = visited.find(vc => { return vc.id===id });
    await setTimeout(() => {
      dispatch(rescoreCard({...match, sm2: value}))
    },100)
    await dispatch(persistLocal())
  }

  return (
      <CardContent>
        <Rating
          name={id} // THIS IS CRITICAL!!
          value={sm2}
          precision={1}
          max={6}
          size={'small'}
          icon={defaultIcon}
          onChange={(event, value) => {
            scoreCard({id, value: (value),  visited, dispatch})
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />

        <Box ml={2}>{labels[hover !== -1 ? hover : sm2]}</Box>
      </CardContent>
  )
}