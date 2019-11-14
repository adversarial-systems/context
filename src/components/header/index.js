import React from 'react';
import Filter from '../filter';
import Present from '../present';

import { useStore } from '../../store';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



const useStyles = (theme) => makeStyles(({ spacing, ...theme }) => ({
  '@global': {
    body: {
      margin: 0,
    },
  },
  appBar: {
    padding: spacing(1),
    marginBottom: spacing(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: theme.overrides.background,
    color: theme.palette.inverted.contrastText,
  },
  actions: {
    display: 'flex',
  },
  present: {
    marginLeft: spacing(1),
  },
}))();


export default () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [{ items, filter }] = useStore();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Typography variant='h6' noWrap children='Cards' />
      <div className={classes.actions}>

         <Filter />
         {items.filter(t => RegExp(filter, 'i').test(t.name)).length===0 && 
         <Present className={classes.present} />
       }


      </div>
    </AppBar>
  );
};