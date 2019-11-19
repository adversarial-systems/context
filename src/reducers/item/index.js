import uuid from 'uuid/v4';
import { DEFAULT_ITEM } from './default';

const initItem = (item) => {
  return Object.assign({}, DEFAULT_ITEM, item, {id: uuid()})
}

export const add = (state, { payload }) => ({
  ...state,
  items: [...state.items, initItem(payload.item)],
});

export const remove = (state, { payload }) => ({
  ...state,
  items: state.items.filter(t => t.id !== payload.item.id),
});

export const update = (state, { payload }) => ({
  ...state,
  items: state.items.map(t => (t.id === payload.item.id ? payload.item : t)),
});

export const filter = (state, { payload }) => ({
  ...state,
  filter: payload.filter
});

export const showState = (state, { payload }) => ({
  ...state,
  state: payload.state
});