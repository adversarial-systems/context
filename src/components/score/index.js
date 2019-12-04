import React, { useState } from 'react';

import { useStore } from '../../store';
import { rescoreCard, updateCard, persistLocal } from '../../actions';

import { Box, CardContent } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Square from '../../icons/Square';

const labels = {
  1: 'No Idea',
  2: 'A Clue',
  3: 'Fuzzy',
  4: 'Ok',
  5: 'Good',
  6: 'Excellent',
};

const defaultIcon = <Square fontSize="inherit" />;

export const Score = (props) => {
  const [{ visited }, dispatch] = useStore();
  const { card: { id: card_id=null, sm2: card_sm2=null }, card } = props;
  const [hover, setHover] = useState(-1);

  const scoreCard = async ({id, value=2.5, visited, dispatch}) => {
    const match = visited.find(vc => { return vc.id===id });
    await setTimeout(() => {
      dispatch(rescoreCard({...match, sm2: value, flipped: false}))
    },100)
    await dispatch(persistLocal())
  }

  return (
      <CardContent>
        <Rating
          name={card_id} // THIS IS CRITICAL!!
          value={card_sm2}
          precision={1}
          max={6}
          size={'small'}
          icon={defaultIcon}
          onChange={(event, value) => {
            scoreCard({id: card_id, value: (value),  visited, dispatch})
          }}
          onClick={(event) => {
            updateCard({ ...card, flipped: false })
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />

        <Box ml={2}>{labels[hover !== -1 ? hover : card_sm2]}</Box>
      </CardContent>
  )
}