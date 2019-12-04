import * as audio from './audio';
import * as card from './card';
import * as item from './item';
import * as time from './time';
import * as local from './local';
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
  [types.CURRENT_CARD]: card.current,
  [types.NEXT_NCARDS]: card.nextn,
  [types.APERTURE_POSITION]: card.aperturePosition,
  [types.APERTURE_SIZE]: card.apertureSize,
  [types.MARKVISITED_CARD]:card.markVisited,
  [types.MARKUNVISITED_CARD]:card.markUnvisited,
  [types.RESCORE_CARD]: card.update,
  [types.UPDATE_CARD]: card.update,
  [types.SET_AUDIO]:audio.setUrl,
  [types.SILENCE_AUDIO]: card.clear,
  // [types.SET_AUDIO]:local.persist,
  [types.SHOW_STATE]: item.showState,
  [types.ADVANCE_TIME]: time.advance,
  [types.DELAY_TIMER]: time.delay,
  [types.AGE_TIMER]: time.age,
  [types.PERSIST_LOCAL]: local.persist,
});
