import React from "react";
import { View, StatusBar } from "react-native";
// import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Constants } from "expo";

import {
  DeckListView,
  NewDeckView,
  IndividualDeckView,
  NewQuestionView,
  QuizView,
  ScoreView,
} from "./screens";
class App extends React.Component {
  state = {
    React: {
      title: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared.",
        },
      ],
    },
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ height: Constants.statusBarHeight, position: "relative" }}
        >
          <StatusBar translucent barStyle="dark-content" />
        </View>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="DeckListView" Component={DeckListView} />
            <Stack.Screen
              name="IndividualDeckView"
              Component={IndividualDeckView}
            />
            <Stack.Screen name="NewQuestionView" Component={NewQuestionView} />
            <Stack.Screen name="QuizView" Component={QuizView} />
            <Stack.Screen name="ScoreView" Component={ScoreView} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default App;
