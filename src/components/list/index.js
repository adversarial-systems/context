import React from 'react';
// import PropTypes from 'prop-types';

import { useStore } from '../../store';
import { currentCard, silenceAudio, markUnvisitedCard, rescoreCard, persistLocal } from '../../actions';

import { Card, Score } from '../';
import { makeStyles } from '@material-ui/core/styles';

import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core';


// import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  gridcontainer: {
    minHeight:200,
    paddingBottom:400,
  },
  griditem: {
    minWidth: 115,
    maxHeight:10,
  },
  card: {
    // minWidth: 145,
    // maxHeight: 100,
    background: "#ffb",
    
  },
  sm2_0: {
    background: "rgba(255,200,180,1)",
    '&:hover': {
      background: "rgba(255,200,180,0.8)",
    }
  },
  sm2_1: {
    background: "rgba(255,220,180,0.4)",
    '&:hover': {
      background: "rgba(255,220,180,0.8)",
    }
  },
  sm2_2: {
    background: "hsla(53,100%,58%,0.4)",
    '&:hover': {
      background: "hsla(57,100%,58%,1)",
    }
  },
  sm2_3: {
    background: "rgba(210,215,200,0.4)",
    '&:hover': {
      background: "rgba(210,215,200,0.8)",
    }
  },
  sm2_4: {
    background: "rgba(180,225,180,0.4)",
    '&:hover': {
      background: "rgba(120,225,100,0.8)",
    }
  },
  sm2_5: {
    background: "rgba(150,255,180,0.4)",
    '&:hover': {
      background: "rgba(100,255,100,0.8)",
    }
  },
  focusCard: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  button: {
    background: "#fff",
    '&:hover': {
       background: "#bf0",
    },
  
  },
  title: {
    fontSize: 10,
  },
  media: {
    height: 80,
  },
  pos: {
    marginBottom: 4,
  },
});





export const List = () => {
  const [{ visited, aperture: { position }, chrono: { created } },dispatch ] = useStore();
  const classes = useStyles();
  

  return (
    <Grid container spacing={1} justify="space-around" className={classes.gridcontainer}>
    {visited && visited
      // .filter(t => (t && t.sm2===3))
      .slice((6*(position-1)),6*(position-1)+6)
      .sort((a,b)=>{ return a.visit - b.visit })
      .sort((a,b)=>{ return a.sm2 - b.sm2 })
      .map(card => (
      <Grid key={card.id} item className={classes.griditem} 
              onMouseOver={()=>{
                // dispatch(markUnvisitedCard({...card}))
                dispatch(currentCard({ ...card }))
              }}
              onMouseOut={()=>{
                dispatch(silenceAudio({ }))
              }}
      >
        <Card className={classes[`sm2_${card.sm2}`]} >
          <CardContent >
            
            <Typography children={card.nl_word}  className={classes.title} color="textSecondary" gutterBottom/>
            <Typography children={card.fl_word} variant="subtitle1" component="h2" />
            <CardMedia
              className={classes.media}
              image={card.images && card.images[0]}
              title={card.fl_word}
            />
            <Typography children={(((card.visit-created))/(86400*1000)).toFixed(1)}  className={classes.title} color="textSecondary" gutterBottom/>
           </CardContent>
           <Score card={card} />
        </Card>
      </Grid>
      
    ))}
    </Grid>
  );
};