import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const QuizView = ({ route, navigation }) => {
  const { deck } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [watch, setWatch] = useState(false); // watch answer
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const totalQuestions = deck.questions.length;
  if (currentQuestion >= totalQuestions) {
    console.log("adf");
    navigation.navigate("ScoreView", {
      score: correctAnswer,
      totalQuestions,
      deck: deck,
    });
    return null;
  }
  const questionKey = Object.keys(deck.questions)[currentQuestion];
  const question = deck.questions[questionKey].question;
  const answer = deck.questions[questionKey].answer;

  console.log(answer, typeof answer);
  const getAnswer = () => {
    return <Text>{answer ? "YES!" : "NO!"}</Text>;
  };

  const handleChoice = (choice) => {
    const result = choice === answer ? 1 : 0;
    setCorrectAnswer(correctAnswer + result);
    setWatch(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <View>
      {totalQuestions < 0 ? (
        <View>Sorry No Questions Found for this Deck!</View>
      ) : (
        <View>
          <Text>
            {currentQuestion}/{totalQuestions}
          </Text>
          {watch === true ? (
            getAnswer()
          ) : (
            <Text style={{ fontSize: 10 }}>{question}</Text>
          )}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setWatch(!watch);
            }}
          >
            {watch === true ? (
              <Text>Watch Question</Text>
            ) : (
              <Text>Watch Answer</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handleChoice(1)}>
            <Text>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handleChoice(0)}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 50,
  },
});

export default QuizView;
