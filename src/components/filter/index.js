import React from 'react';

import { useStore } from '../../store';
import { filterItem } from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import styles from './styles';
const useStyles = makeStyles(styles);

export const Filter = () => {
  const [{ filter }, dispatch] = useStore();
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search…'
        onChange={e => dispatch(filterItem(e.target.value))}
        value={filter}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
};