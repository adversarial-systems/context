export const persist = (state, { payload }) => {
  const {local: { update } = {update: {...state}}} = payload
  localStorage.setItem(state.localStorageKey, JSON.stringify(update || state));
  return (update || state)
}
