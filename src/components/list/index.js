import React from 'react';
// import PropTypes from 'prop-types';

import { useStore } from '../../store';
import { nextNCards, currentCard, aperturePosition, apertureSize, silenceAudio, markUnvisitedCard, rescoreCard, persistLocal } from '../../actions';

import { Card, Score } from '../';
import { makeStyles } from '@material-ui/core/styles';

import { CardContent, CardMedia, Grid, Paper, Typography } from '@material-ui/core';


// import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  paper:{
    maxHeight:200,
  },
  gridcontainer: {
    // minHeight:100,
    paddingBottom:10,
    // '@media(min-width:780px)': { // eslint-disable-line no-useless-computed-key
    //   width: '80%'
    // }
  },
  griditem: {
    minWidth: 115,
    maxHeight:10,
  },
  gridprev: {
    minWidth: 75,
    minHeight:200,
  },
  gridnext: {
    minWidth: 75,
    minHeight:200,
    paddingTop: 100,
  },
  card: {
    // minWidth: 145,
    // maxHeight: 100,
    background: "#ffb",
    '&:hover': {
      background: "rgba(205,255,180,0.8)",
    }
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


const swallow = (e) => {
  e.stopPropagation();
}



export const List = () => {
  const [{ visited, aperture: { position: aperture_position, size: aperture_size, max: aperture_max }, chrono: { created } },dispatch ] = useStore();
  const classes = useStyles();
  

  return (
    <Grid container spacing={4} justify="space-around" className={classes.gridcontainer}>
      <Grid 
          item 
          className={classes.gridprev} 
          onClick={(e) => { 
            dispatch( aperturePosition({ position: (aperture_position-1) }) ) 
          }}
          onMouseOver={()=>{
            dispatch(silenceAudio({ }))
          }} >
        <Card className={classes.card}>
          <CardContent >  
            <Typography children={'Prev'}  className={classes.title} color="textSecondary" gutterBottom/>
          </CardContent >
        </Card>
      </Grid>
      <Grid 
            item 
            className={classes.gridnext} 
            onClick={(e) => { 
              if(aperture_position<aperture_max) {dispatch( aperturePosition({ position: (aperture_position+1) }) ) } else {dispatch(nextNCards({ n: (aperture_size) })); dispatch( aperturePosition({ position: (aperture_position+1) }) ) } 
            }}  
            onMouseOver={()=>{
              dispatch(silenceAudio({ }))
            }} >
        <Card className={classes.card} >
          <CardContent >
            <Typography children={'Next'}  className={classes.title} color="textSecondary" gutterBottom/>
          </CardContent>
        </Card>
      </Grid>
    {visited && visited
      // .filter(t => (t && t.sm2===3))
      .slice((aperture_size*(aperture_position-1)),(aperture_size*(aperture_position-1))+aperture_size)
      .sort((a,b)=>{ return a.visit - b.visit })
      .sort((a,b)=>{ return a.sm2 - b.sm2 })
      .map(card => (
      <Grid key={card.id} item className={classes.griditem} 
              onMouseOver={()=>{
                // dispatch(markUnvisitedCard({...card}))
                dispatch(currentCard({ ...card }))
              }}
               onMouseOut={swallow}
      >
        <Card className={classes[`sm2_${card.sm2}`]} onMouseOver={(e)=>{}}>
          <CardContent onMouseOver={(e)=>{}}>
            
            <Typography onMouseOver={swallow} children={card.nl_word}  className={classes.title} color="textSecondary" gutterBottom/>
            <Typography onMouseOver={swallow} children={card.fl_word} variant="subtitle1" component="h2" />
            <CardMedia
              onMouseOver={swallow}
              className={classes.media}
              image={card.images && card.images[0]}
              title={card.fl_word}
            />
            <Typography onMouseOver={swallow} children={(((card.visit-created))/(86400*1000)).toFixed(1)}  className={classes.title} color="textSecondary" gutterBottom/>
           </CardContent>
           {false && <Score card={card} />}
        </Card>
      </Grid>
      
    ))}
      
    </Grid>
    
  );
};