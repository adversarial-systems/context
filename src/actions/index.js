import * as types from './types';

export const addItem = item => ({ type: types.ADD_ITEM, payload: { item } });
export const removeItem = item => ({ type: types.REMOVE_ITEM, payload: { item } });
export const udpateItem = item => ({ type: types.UPDATE_ITEM, payload: { item } });
export const filterItem = filter => ({ type: types.FILTER_ITEM, payload: { filter } });

export const showState = state => ({ type: types.SHOW_STATE, payload: { state } });

// export const unassigned = card => ({ type: types.UNASSIGNED_CARD, payload: { card } });
export const nextCard = next => ({ type: types.NEXT_CARD, payload: { next } });
export const updateCard = card => ({ type: types.UPDATE_CARD, payload: { card } });
export const markVisitedCard = card => ({ type: types.MARKVISITED_CARD, payload: { card } });
export const markUnvisitedCard = card => ({ type: types.MARKUNVISITED_CARD, payload: { card } });
export const rescoreCard = card => ({ type: types.RESCORE_CARD, payload: { card } });
export const ageCard = card => ({ type: types.AGE_CARD, payload: { card } });
export const demoteCard = card => ({ type: types.DEMOTE_CARD, payload: { card } });
export const promoteCard = card => ({ type: types.PROMOTE_CARD, payload: { card } });
export const filterCard = filter => ({ type: types.FILTER_CARD, payload: { filter } });

export const advanceTime = time => ({type: types.ADVANCE_TIME, payload: { time } });
// export const dayAdvance = day => ({type: types.DAY_ADVANCE, payload: { day } });

export const persistLocal = local => ({type: types.PERSIST_LOCAL, payload: { local } });
export const delayTimer = timer => ({type: types.DELAY_TIMER, payload: { timer } });