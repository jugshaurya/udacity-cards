import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { deleteDeck } from "../redux/action";

const IndividualDeckView = ({ route, dispatch, navigation }) => {
  const { deck } = route.params;

  const handleDeckDelete = () => {
    dispatch(deleteDeck(deck.title));
    navigation.navigate("DeckListView");
  };

  const handleStartQuiz = () => {
    navigation.navigate("QuizView", { deck: deck });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.outerBox}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.padding10}>{deck.questions.length} Cards</Text>
        <View style={{ flex: 10 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate("NewQuestionView", { deck: deck })
            }
          >
            <Text> Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleStartQuiz}>
            <Text> Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleDeckDelete}>
            <Text> Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerBox: {
    margin: 20,
    padding: 30,
    borderWidth: 2,
    borderColor: "#364f6b",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
    padding: 10,
    paddingLeft: 0,
  },
  padding10: { padding: 10 },
  btn: {
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#3e3636",
    backgroundColor: "#fde772",
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 50,
  },
});

export default connect(null)(IndividualDeckView);
