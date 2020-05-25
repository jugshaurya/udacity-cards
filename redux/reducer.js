import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from "./actionTypes";

const INITIAL_STATE = {
  decks: {
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
  },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Recieve all the decks from localstore
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.payload,
      };
    // Add in a new deck
    case ADD_DECK:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    // Add a new card
    case ADD_CARD:
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
    default:
      return state;
  }
}

export default reducer;
