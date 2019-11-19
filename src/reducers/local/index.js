export const persist = (state, { payload }) => {
  localStorage.setItem(state.localStorageKey, JSON.stringify(state));
  return (state)
}
