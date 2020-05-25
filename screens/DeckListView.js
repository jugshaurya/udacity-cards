import React from "react";
import { View, Text, ScrollView, Animated } from "react-native";
import { Constants } from "expo";
import Deck from "../components/Deck";
import { connect } from "react-redux";

class DeckListView extends React.Component {
  state = {
    scaleValue: new Animated.Value(1),
  };
  render() {
    const { scaleValue } = this.state;
    const { decks, navigation } = this.props;
    console.log(this.props);
    return (
      <Animated.ScrollView
        style={{ flex: 1, transform: [{ scale: scaleValue }] }}
      >
        {Object.keys(decks).map((key) => (
          <Deck
            key={key}
            deck={decks[key]}
            onPress={() => {
              Animated.sequence([
                Animated.timing(scaleValue, { duration: 125, toValue: 0.96 }),
                Animated.timing(scaleValue, { duration: 125, toValue: 1 }),
              ]).start(() => {
                navigation.navigate("IndividualDeckView", { deck: decks[key] });
              });
            }}
          />
        ))}
      </Animated.ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state,
});

export default connect(mapStateToProps)(DeckListView);
