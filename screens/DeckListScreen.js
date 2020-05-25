import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import DeckListView from "./DeckListView";
import IndividualDeckView from "./IndividualDeckView";
import NewQuestionView from "./NewQuestionView";
import QuizView from "./QuizView";
import ScoreView from "./ScoreView";

class DeckListScreen extends Component {
  state = {};
  render() {
    return (
      <Stack.Navigator initialRouteName="DeckListView">
        <Stack.Screen
          options={{ title: "DeckListView" }}
          name="DeckListView"
          component={DeckListView}
        />
        <Stack.Screen
          name="IndividualDeckView"
          component={IndividualDeckView}
          options={{ title: "IndividualDeckView" }}
        />
        <Stack.Screen
          options={{ title: "NewQuestionView" }}
          name="NewQuestionView"
          component={NewQuestionView}
        />
        <Stack.Screen
          options={{ title: "QuizView" }}
          name="QuizView"
          component={QuizView}
        />
        <Stack.Screen
          options={{ title: "ScoreView" }}
          name="ScoreView"
          component={ScoreView}
        />
      </Stack.Navigator>
    );
  }
}

export default DeckListScreen;
