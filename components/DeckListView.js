import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

class DeckListView extends React.Component {
  state = {
    scaleValue: new Animated.Value(1),
  };

  render() {
    const { scaleValue } = this.state;
    const { decks, navigation } = this.props;
    const { card, bigtext, smalltext, center } = styles;

    return (
      <ScrollView>
        {Object.keys(decks).map((key) => {
          const deck = decks[key];
          return (
            <Animated.View
              key={key}
              style={{ transform: [{ scale: scaleValue }] }}
            >
              <TouchableOpacity
                style={card}
                onPress={() => {
                  Animated.sequence([
                    Animated.timing(scaleValue, {
                      duration: 125,
                      toValue: 0.96,
                    }),
                    Animated.timing(scaleValue, { duration: 125, toValue: 1 }),
                  ]).start(() => {
                    navigation.navigate("IndividualDeckView", {
                      deck,
                    });
                  });
                }}
              >
                <View style={center}>
                  <Text style={bigtext}>{deck.title}</Text>
                  <Text style={smalltext}>{deck.questions.length} Cards</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    margin: 20,
    marginLeft: 70,
    marginRight: 70,
    borderWidth: 2,
    borderColor: "#3e3636",
    borderRadius: 10,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  smalltext: {
    marginTop: 10,
    fontSize: 18,
    color: "#364f6b",
    fontWeight: "300",
  },
  bigtext: {
    fontSize: 20,
    fontWeight: "500",
  },
});

const mapStateToProps = (state) => ({
  decks: state,
});

export default connect(mapStateToProps)(DeckListView);
