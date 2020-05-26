import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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
      <View style={styles.padding10}>
        <View style={styles.outerBox}>
          <Text style={styles.title}>Title for New Deck: </Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({ title: text })}
            value={title}
            placeholder={"Enter a Deck Title"}
          />
          <TouchableOpacity onPress={this.handleSubmit} style={styles.btn}>
            <Text>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerBox: {
    margin: 20,
    padding: 30,
    borderWidth: 2,
    borderColor: "#364f6b",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
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
    borderRadius: 10,
  },
});

export default connect(null)(NewDeckView);
