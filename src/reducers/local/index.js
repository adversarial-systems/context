export const persist = (state, { payload }) => {
  const {local: { update }} = payload
  localStorage.setItem(state.localStorageKey, JSON.stringify(update || state));
  return (update || state)
}
