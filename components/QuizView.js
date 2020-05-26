import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const QuizView = ({ route, navigation }) => {
  const { deck } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [watch, setWatch] = useState(false); // watch answer
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const totalQuestions = deck.questions.length;

  // move to scoreView if all Questions are done!
  if (currentQuestion >= totalQuestions) {
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

  const getAnswer = () => {
    return <Text style={styles.question}>{answer ? "YES!" : "NO!"}</Text>;
  };

  const handleChoice = (choice) => {
    const result = choice === answer ? 1 : 0;
    setCorrectAnswer(correctAnswer + result);
    setWatch(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.outerBox}>
        {totalQuestions < 0 ? (
          <View>Sorry No Questions Found for this Deck!</View>
        ) : (
          <View>
            <Text style={styles.questionRemain}>
              {currentQuestion}/{totalQuestions}
            </Text>
            {watch === true ? (
              getAnswer()
            ) : (
              <Text style={styles.question}>Q: {question}</Text>
            )}
            <TouchableOpacity
              style={styles.btnWatch}
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

            <TouchableOpacity
              style={[styles.btn, { backgroundColor: "#2bff3d" }]}
              onPress={() => handleChoice(1)}
            >
              <Text>Correct</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, { backgroundColor: "#f14857" }]}
              onPress={() => handleChoice(0)}
            >
              <Text>Incorrect</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerBox: {
    margin: 20,
    padding: 30,
    borderWidth: 2,
    borderColor: "#364f6b",
    borderRadius: 20,
  },
  questionRemain: {
    fontSize: 15,
    fontWeight: "400",
    padding: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  question: {
    fontSize: 25,
    fontWeight: "500",
    minHeight: 100,
  },
  btnWatch: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#3e3636",
    backgroundColor: "#43dde6",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
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

export default QuizView;
