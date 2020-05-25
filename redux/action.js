import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "./actionTypes";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    payload: decks,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    payload: deck,
  };
}

export function addCard(questionDetails) {
  return {
    type: ADD_CARD,
    payload: questionDetails,
  };
}
