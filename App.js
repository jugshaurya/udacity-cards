import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Decks from "./components/Decks";

class App extends React.Component {
  state = {
    decks: {
      deck1: {
        name: "Deck #1",
        cards: [{}],
      },
      deck2: {
        name: "Deck #2",
        cards: [{}],
      },
      deck3: {
        name: "Deck #3",
        cards: [{}],
      },
      deck4: {
        name: "Deck #4",
        cards: [{}],
      },
      deck5: {
        name: "Deck #5",
        cards: [{}],
      },

      deck6: {
        name: "Deck #6",
        cards: [{}],
      },
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Decks decks={this.state.decks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
