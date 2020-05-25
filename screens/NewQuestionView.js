import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { addCard } from "../redux/action";
import { connect } from "react-redux";
class NewQuestionView extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    const { question, answer } = this.state;
    const { deck } = this.props.route.params;

    const questionDetails = {
      deckId: deck.title,
      question,
      answer,
    };

    console.log(questionDetails);
    dispatch(addCard(questionDetails));
    navigation.navigate("DeckListView");
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View>
        <Text>Question: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => this.setState({ question: text })}
          value={question}
        />
        <Text>Answer: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => this.setState({ answer: text })}
          value={answer}
        />

        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null)(NewQuestionView);
