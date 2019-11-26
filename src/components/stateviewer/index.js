import React from 'react';
import ReactJson from 'react-json-view';
import { useStore } from '../../store';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import { showState } from '../../actions';


const useStyles = (theme) => makeStyles(({ spacing, ...theme }) => ({
  paper: {
    padding: spacing(2),
    marginBottom: spacing(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize:'60%',
    display: 'block',
  },
}))();


export const StateViewer = () => {
  const [state] = useStore();
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
  	<Paper className={classes.paper}>
  	  <ReactJson src={state} displayDataTypes={false} collapsed={1} onEdit={()=>{}} onDelete={()=>{}} />
  	</Paper>
  );
}