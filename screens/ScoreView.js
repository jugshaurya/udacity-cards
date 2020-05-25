import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ScoreView = ({ route }) => {
  const { score, totalQuestions, deck } = route.params;
  const percentage = (score / totalQuestions) * 100;

  const handleStartQuiz = () => {
    navigation.popToTop("QuizView", { deck: deck });
  };
  const handleGoingToIndividualView = () => {
    navigation.popToTop("IndividualDeckView", { deck: deck });
  };

  return (
    <View>
      <Text>Score : {score}</Text>
      <Text>Percentage : {percentage.toFixed(1)}%</Text>
      <TouchableOpacity onPress={handleStartQuiz}>
        <Text>Start Quiz Over</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoingToIndividualView}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScoreView;
