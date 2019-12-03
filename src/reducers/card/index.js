import uuid from 'uuid/v4';
import { shuffleArrayWithKFY } from '../../utils';
import { DEFAULT_CARD } from './default';
import { POR_ENG } from '../../data';

const initCard = (card) => {
  return Object.assign({}, DEFAULT_CARD, card, {source: card.id, id: uuid(), visit: Date.now()});
}

const unvisitedCardPicker = ({visited, source, number}) => {
  const unvisitedCards = shuffleArrayWithKFY(source).filter(s => !(visited.map(card => card.source)).find(sid => sid && sid === s.id)).slice(0,number||1)
  if(unvisitedCards) return [...visited, ...unvisitedCards.map((c)=>initCard(c))];
  return visited
}

const getMaxAperturePosition = (state) => {
  return parseInt(Number(state.visited.length / state.aperture.size))
}

const getMaxApertureSize = (state) => {
  return parseInt(Number(6).toFixed(0))
}

/** 
 * the formula here will essentially allow continuous forward progress via rollover to 1 
 *  and halt on reversing past 1 
 */
const ensurePositionLimits = (state, input) => {
  return (0<input && input<getMaxAperturePosition(state)+1) ? input : 1
}

const ensureSizeLimits = (state, input) => {
  return (0<input && input<getMaxApertureSize(state)+1) ? input : 1
}

// const visitCard = (card) => {
//   return Object.assign({}, DEFAULT_CARD, card, {id: uuid(), visit: Date.now()})
// }

export const aperturePosition = (state, { payload }) => ({
  ...state,
  aperture: {...state.aperture, ...payload.aperture, max: getMaxAperturePosition(state), position: ensurePositionLimits(state, payload.aperture.position)},
});

export const apertureSize = (state, { payload }) => ({
  ...state,
  aperture: {...state.aperture, ...payload.aperture, max: getMaxAperturePosition(state), size: ensureSizeLimits(state, payload.aperture.size)},
});


export const clear = (state, { payload }) => ({
  ...state,
  current: {},
});

export const current = (state, { payload }) => ({
  ...state,
  current: {...payload.card},
});


export const nextn = (state, { payload }) => ({
  ...state,
  visited: unvisitedCardPicker({visited: state.visited || [], source: POR_ENG.cardlist, number: payload.next.n }),
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