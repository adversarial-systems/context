import * as types from './types';

export const addItem = item => ({ type: types.ADD_ITEM, payload: { item } });
export const removeItem = item => ({ type: types.REMOVE_ITEM, payload: { item } });
export const udpateItem = item => ({ type: types.UPDATE_ITEM, payload: { item } });
export const filterItem = filter => ({ type: types.FILTER_ITEM, payload: { filter } });
export const showState = state => ({ type: types.SHOW_STATE, payload: { state } });

export const advanceTime = time => ({type: types.ADVANCE_TIME, payload: { time } });
// export const dayAdvance = day => ({type: types.DAY_ADVANCE, payload: { day } });

export const persistLocal = local => ({type: types.PERSIST_LOCAL, payload: { local } });
export const delayTimer = timer => ({type: types.DELAY_TIMER, payload: { timer } });