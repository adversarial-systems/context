import React from 'react';

import { useStore } from '../../store';
import { addItem, filterItem } from '../../actions';

import uuid from 'uuid/v4';

import Button from '@material-ui/core/Button';

export default props => {
  const [{ filter }, dispatch] = useStore();

  const onClick = () => {
    dispatch(addItem({ id: uuid(), name: filter, done: false }));
    dispatch(filterItem(''));
  };

  return (
    <Button
      {...props}
      variant='contained'
      onClick={onClick}
      disabled={!filter}
      children='Present'
    />
  );
};