 import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();
StateContext.displayName = 'StateContext';

export const Store = ({ reducer, initialState, children }) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState)}
    children={children}
  />
);

export const useStore = () => useContext(StateContext);