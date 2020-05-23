import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";

import Card from "./Card";

class Decks extends React.Component {
  render() {
    const { decks } = this.props;
    return (
      <ScrollView>
        {Object.keys(decks).map((key) => {
          const deck = decks[key];

          return (
            <View style={styles.deck}>
              <Text>{deck.name}</Text>
              <Text style={{ color: "grey" }}>{deck.cards.length} Cards </Text>
              {deck.cards.map((card, i) => {
                <Card key={i} card={card} />;
              })}
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    margin: 10,
    padding: 20,
    marginLeft: 2,
    paddingLeft: 100,
    paddingRight: 100,
    borderWidth: 1,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
  },
});
export default Decks;
