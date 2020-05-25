import React from "react";
import { View, Text } from "react-native";
import { Constants } from "expo";
import Deck from "../components/Deck";

class DeckListView extends React.Component {
  static navigationOptions = () => ({
    title: "Decks",
    headerBackTitle: null,
    headerLeft: <View />,
    headerStyle: {
      marginTop: -Constants.statusBarHeight,
    },
  });

  state = {
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

  render() {
    const { decks } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {Object.keys(decks).map((key) => {
          <Deck deck={decks[key]} name={key} />;
        })}
        <Text>DeckListView</Text>
      </View>
    );
  }
}

export default DeckListView;
