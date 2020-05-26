import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ScoreView = ({ route, navigation }) => {
  const { score, totalQuestions, deck } = route.params;
  const percentage = (score / totalQuestions) * 100;

  const handleStartQuiz = () => {
    navigation.replace("QuizView", { deck: deck });
  };
  const handleGoingToIndividualView = () => {
    navigation.navigate("IndividualDeckView", { deck: deck });
  };

  return (
    <View>
      <View style={styles.outerBox}>
        {totalQuestions >= 1 ? (
          <View>
            <Text style={[styles.title, { fontSize: 15 }]}>
              Score : {score} correct out of {totalQuestions}
            </Text>
            <Text style={[styles.title, { fontSize: 25 }]}>
              Percentage : {percentage.toFixed(1)}%
            </Text>
            <TouchableOpacity onPress={handleStartQuiz} style={styles.btn}>
              <Text>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleGoingToIndividualView}
              style={styles.btn}
            >
              <Text>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>
              🙇 Sorry No Cards Found for this Deck! Hence No Quiz! 😍
            </Text>
          </View>
        )}
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
    padding: 10,
    fontWeight: "500",
    paddingLeft: 0,
  },
  btn: {
    borderWidth: 2,
    borderColor: "#3e3636",
    backgroundColor: "#fde772",
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    marginLeft: "auto",
    marginTop: 50,
    borderRadius: 10,
  },
});

export default ScoreView;
