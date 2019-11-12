import React from 'react';
// import Filter from 'components/filter';
// import Add from 'components/add';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const Filter = () => { 
  return (<div></div>)
}

const Add = () => { 
  return (<div></div>)
}

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
  add: {
    marginLeft: spacing(1),
  },
}))();


export default () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <AppBar position='static' className={classes.appBar}>
      <Typography variant='h6' noWrap children='Items' />
      <div className={classes.actions}>

          <Filter />
         <Add className={classes.add} />


      </div>
    </AppBar>
  );
};