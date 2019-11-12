import React from 'react';
import ReactJson from 'react-json-view';
import { useStore } from '../../store';
// import { showState } from '../../actions';

export default () => {
  const [state] = useStore();
  return (<ReactJson src={state} displayDataTypes={false} theme={"shapeshifter"} />);
}