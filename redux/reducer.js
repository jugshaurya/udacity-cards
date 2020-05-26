import actionTypes from "./actionTypes";

const INITIAL_STATE = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Recieve all the decks from localstore
    case actionTypes.RECEIVE_DECKS:
      return {
        ...state,
        ...action.payload,
      };
    // Add in a new deck
    case actionTypes.ADD_DECK:
      return {
        ...state,
        [action.payload.id]: action.payload.deck,
      };
    // Add a new card
    case actionTypes.ADD_CARD:
      return {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          questions: state[action.payload.deckId].questions.concat({
            question: action.payload.question,
            answer: action.payload.answer,
          }),
        },
      };

    case actionTypes.DELETE_DECK: {
      const newState = { ...state };
      console.log(newState, newState[action.payload], action.payload);
      newState[action.payload] = undefined;
      console.log(newState);
      delete newState[action.payload];
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;
