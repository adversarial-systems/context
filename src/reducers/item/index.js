export const add = (state, { payload }) => ({
  ...state,
  items: [...state.items, payload.item],
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