import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { deleteDeck } from "../redux/action";

const IndividualDeckView = (props) => {
  const { deck } = props.route.params;
  console.log(props);
  const { dispatch, navigation } = props;
  const handleDeckDelete = () => {
    dispatch(deleteDeck(deck.title));
    navigation.navigate("DeckListView");
  };

  const handleStartQuiz = () => {
    navigation.navigate("QuizView", { deck: deck });
  };

  return (
    <View>
      <Text>{deck.title}</Text>
      <Text>{deck.questions.length} Cards</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("NewQuestionView", { deck: deck })}
      >
        <Text> Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleStartQuiz}>
        <Text> StartQuiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleDeckDelete}>
        <Text> Delete Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 50,
  },
});

export default connect(null)(IndividualDeckView);
