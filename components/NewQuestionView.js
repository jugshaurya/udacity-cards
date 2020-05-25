import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { addCard } from "../redux/action";

class NewQuestionView extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  handleSubmit = () => {
    const { dispatch, navigation, route } = this.props;
    const { question, answer } = this.state;
    if (question.trim().length === 0 || answer.trim().length === 0) return;
    const deckId = route.params.deck.title;

    const questionDetails = {
      deckId,
      question,
      answer: Number(answer),
    };

    dispatch(addCard(questionDetails));
    this.setState({ question: "", answer: "" });
    navigation.navigate("DeckListView");
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.padding10}>
        <Text style={styles.title}>Question: </Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => this.setState({ question: text })}
          value={question}
          placeholder={"Enter a Yes/No Question"}
        />
        <Text style={styles.title}> Answer: </Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => this.setState({ answer: text })}
          value={answer}
          keyboardType={"numeric"}
          placeholder={"1 for true 0 for false"}
        />

        <TouchableOpacity onPress={this.handleSubmit} style={styles.btn}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    paddingLeft: 0,
  },
  padding10: { padding: 10 },
  textinput: {
    height: 40,
    fontSize: 15,
    borderWidth: 2,
    padding: 10,
    borderTopColor: "#f0f0f0",
    borderLeftColor: "#f0f0f0",
    borderRightColor: "#f0f0f0",
    borderBottomColor: "#3e3636",
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
  },
});

export default connect(null)(NewQuestionView);
