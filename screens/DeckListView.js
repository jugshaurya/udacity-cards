import React from "react";
import { View, Text } from "react-native";
import { Constants } from "expo";
import Deck from "../components/Deck";
import { connect } from "react-redux";

class DeckListView extends React.Component {
  render() {
    const { decks } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {Object.keys(decks).map((key) => {
          <Deck deck={decks[key]} name={key} />;
        })}
      </View>
    );
  }
}

export default connect()(DeckListView);
