import actionTypes from "./actionTypes";

export const receiveDecks = (decks) => {
  return {
    type: actionTypes.RECEIVE_DECKS,
    payload: decks,
  };
};

export const addDeck = (deck) => {
  return {
    type: actionTypes.ADD_DECK,
    payload: deck,
  };
};

export const addCard = (questionDetails) => {
  return {
    type: actionTypes.ADD_CARD,
    payload: questionDetails,
  };
};

export const deleteDeck = (deckId) => {
  return {
    type: actionTypes.DELETE_DECK,
    payload: deckId,
  };
};
