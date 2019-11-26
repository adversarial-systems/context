import React from 'react';

import { useStore } from '../../store';
import { markUnvisitedCard } from '../../actions';

import { Card } from '../';
import { makeStyles } from '@material-ui/core/styles';

import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  card: {
    // minWidth: 225,
    // maxHeight: 100,
    background: "#ffb",
    '&:hover': {
       background: "#bfb",
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  media: {
    height: 60,
    maxWidth: 60,
    scale: 0.5,
  },
  pos: {
    marginBottom: 4,
  },
});

export const TodayList = () => {
  const [{ visited }, dispatch] = useStore();
  const classes = useStyles();

  return (
    <Grid container spacing={1} justify="space-around">
    {visited && visited
      // .filter(t => (t && t.srs && !t.srs.today))
      .map(card => (
      <Grid key={card.id} item  onClick={()=>{
                dispatch(markUnvisitedCard({...card}))
              }}>
        <Card className={classes.card}>
          <CardContent>
          <Typography children={card.nl_word}  className={classes.title} color="textSecondary" gutterBottom/>
          <Typography children={card.fl_word} variant="subtitle1" component="h2" />
          <CardMedia
            className={classes.media}
            image={card.images[0]}
            title={"test"}
          />
          </CardContent>
        </Card>
      </Grid>
      
    ))}
    </Grid>
  );
};