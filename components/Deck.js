import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Deck = ({ deck, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.center}>
        <Text style={{ fontSize: 30 }}>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 50,
    margin: 10,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 2,
    borderColor: "#000",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Deck;
