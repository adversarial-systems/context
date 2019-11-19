import React from 'react';

import { useStore } from '../../store';
import { udpateItem } from '../../actions';

import { Card } from '../';

import { Grid, Checkbox, Typography } from '@material-ui/core';

export const TodayList = () => {
  const [{ items }, dispatch] = useStore();

  return (
    <Grid container spacing={3} justify="space-around">
    {items
      .filter(t => (t && t.srs && !t.srs.today))
      .map(item => (
      <Grid key={item.id} item xs={2}>
        <Card>
          <Typography children={item.name} component="p"/>
          <Checkbox
            checked={item.srs.visited}
            onChange={() =>
              dispatch(udpateItem({ ...item, srs: { ...item.srs, visited: !item.srs.visited} }))
            }
          />
        </Card>
      </Grid>
      
    ))}
    </Grid>
  );
};