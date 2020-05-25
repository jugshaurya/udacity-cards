import React from "react";
import { View, Text } from "react-native";

const Deck = ({ deck, name }) => {
  return (
    <View style={{ backgroundColor: "pink" }}>
      <Text>{name}</Text>
      <Text>{deck.title}</Text>
      <Text>{deck.questions.length}</Text>
    </View>
  );
};
