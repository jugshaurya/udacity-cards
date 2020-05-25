import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
      <Text>
        Score : {score} correct out of {totalQuestions}
      </Text>
      <Text>Percentage : {percentage.toFixed(1)}%</Text>
      <TouchableOpacity onPress={handleStartQuiz}>
        <Text>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoingToIndividualView}>
        <Text>Back to Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScoreView;
