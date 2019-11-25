 import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();
// StateContext.displayName = 'StateContext';

export const Store = ({ reducer, initialState, children }) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState)}
    children={children}
  />
);

export const useStore = () => useContext(StateContext);

export const initLocalState = (initialState) => {
  if(localStorage.getItem(initialState.localStorageKey))
    { return JSON.parse(localStorage.getItem(initialState.localStorageKey) ) }
  const newState = JSON.stringify(Object.assign({}, initialState ,  {chrono: Object.assign({}, initialState.chrono, {created: Date.now()}) } ))
  localStorage.setItem(initialState.localStorageKey, newState)
  return JSON.parse(newState)
}