import uuid from 'uuid/v4';
import { DEFAULT_CARD } from './default';
import { POR_ENG } from '../../data';

const initCard = (card) => {
  return Object.assign({}, DEFAULT_CARD, card, {id: uuid(), visit: Date.now()})
}

export const next = (state, { payload }) => ({
  ...state,
  visited: [...state.visited || [], initCard(payload.card)],
  source: [...POR_ENG.cardlist],
});

export const update = (state, { payload }) => ({
  ...state,
  visited: state.visited.map(t => (t.id === payload.card.id ? payload.card : t)),
});

export const markVisited = (state, { payload }) => ({
  ...state,
  visited: [...state.visited, payload.card],
});

export const markUnvisited = (state, { payload }) => ({
  ...state,
  visited: state.visited.filter(t => t.id !== payload.card.id),
});

export const filterCards = (state, { payload }) => ({
  ...state,
  filterCards: payload.filter
});



/*
export const nextCard = next => 
export const updateCard = card =
export const markVisitedCard = c
export const markUnvisitedCard =
export const rescoreCard = card 
export const ageCard = card => (
export const demoteCard = card =
export const promoteCard = card 
export const filterCard = filter
*/