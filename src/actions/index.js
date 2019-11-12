import * as types from './types';

export const addItem = item => ({ type: types.ADD_ITEM, payload: { item } });
export const removeItem = item => ({ type: types.REMOVE_ITEM, payload: { item } });
export const udpateItem = item => ({ type: types.UPDATE_ITEM, payload: { item } });
export const filterItem = filter => ({ type: types.FILTER_ITEM, payload: { filter } });
export const showState = state => ({ type: types.SHOW_STATE, payload: { state } });