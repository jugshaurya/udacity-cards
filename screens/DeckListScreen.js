import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import IndividualDeckView from "../components/IndividualDeckView";
import NewQuestionView from "../components/NewQuestionView";
import DeckListView from "../components/DeckListView";
import ScoreView from "../components/ScoreView";
import QuizView from "../components/QuizView";

const Stack = createStackNavigator();
const DeckListScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="DeckListView"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Stack.Screen
        options={{ title: "🃏 All Decks 🃏" }}
        name="DeckListView"
        component={DeckListView}
      />
      <Stack.Screen
        options={{ title: "🃏 Deck 🃏" }}
        name="IndividualDeckView"
        component={IndividualDeckView}
      />
      <Stack.Screen
        options={{ title: "➕ Add Question ➕" }}
        name="NewQuestionView"
        component={NewQuestionView}
      />
      <Stack.Screen
        options={{ title: "🤹 Quiz 🤹" }}
        name="QuizView"
        component={QuizView}
      />
      <Stack.Screen
        options={{ title: "🛹 Score 🛹" }}
        name="ScoreView"
        component={ScoreView}
      />
    </Stack.Navigator>
  );
};

export default DeckListScreen;
