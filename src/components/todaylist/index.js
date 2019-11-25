import React from 'react';

import { useStore } from '../../store';
import { udpateItem, removeItem } from '../../actions';

import { Card } from '../';

import { Grid, Checkbox, Typography } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

export const TodayList = () => {
  const [{ items }, dispatch] = useStore();

  return (
    <Grid container spacing={1} justify="space-around">
    {items
      .filter(t => (t && t.srs && !t.srs.today))
      .map(item => (
      <Grid key={item.id} item xs={3}>
        <Card>
          <Typography children={item.name} variant="caption" component="p" align="center" />
           <Checkbox
            checked={item.srs.visited}
            onChange={() =>
              dispatch(udpateItem({ ...item, srs: { ...item.srs, visited: !item.srs.visited} }))
            }
          />
          <div >
            <DeleteIcon 
              onClick={()=>{
                dispatch(removeItem({...item}))
              }}
            />
          </div>
        </Card>
      </Grid>
      
    ))}
    </Grid>
  );
};