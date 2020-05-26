import React, { useState } from "react";
import { clearLocalNotification, setLocalNotification } from "../notification";
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

  const notificationHandler = async () => {
    await clearLocalNotification();
    await setLocalNotification();
  };

  // move to scoreView to show no card found - if no questions are found!
  if (totalQuestions === 0) {
    navigation.navigate("ScoreView", {
      score: correctAnswer,
      totalQuestions,
      deck: deck,
    });
    return null;
  }

  // move to scoreView if all Questions are done!
  if (currentQuestion >= totalQuestions) {
    notificationHandler();

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

  const handleChoice = (choice) => {
    setCorrectAnswer(correctAnswer + choice);
    setWatch(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.outerBox}>
        <Text style={styles.questionRemain}>
          {currentQuestion}/{totalQuestions}
        </Text>

        <View style={styles.questionanswer}>
          {watch === true ? (
            <Text style={styles.question}>Ans: {answer}</Text>
          ) : (
            <Text style={styles.question}>Ques: {question}</Text>
          )}
        </View>
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
  questionanswer: {
    padding: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    alignSelf: "flex-start",
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
