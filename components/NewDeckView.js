import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { addDeck } from "../redux/action";
import { connect } from "react-redux";

class NewDeckView extends React.Component {
  state = {
    title: "",
  };

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    const { title } = this.state;
    if (title.trim().length === 0) return;

    const deck = {
      title: title,
      questions: [],
    };
    dispatch(
      addDeck({
        id: title,
        deck,
      })
    );

    this.setState({ title: "" });
    navigation.navigate("IndividualDeckView", { deck: deck });
  };

  render() {
    const { title } = this.state;
    return (
      <View>
        <Text>Title for new Deck: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => this.setState({ title: text })}
          value={title}
          placeholder={"Enter a Deck Title"}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null)(NewDeckView);
