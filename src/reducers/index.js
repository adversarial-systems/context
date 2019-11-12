import * as item from './item';
import * as types from '../actions/types';

const combine = handlers => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};

export default combine({
  [types.ADD_ITEM]: item.add,
  [types.REMOVE_ITEM]: item.remove,
  [types.UPDATE_ITEM]: item.update,
  [types.FILTER_ITEM]: item.filter,
  [types.SHOW_STATE]: item.showState,
});