import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

class DeckListScreen extends Component {
  state = {};
  render() {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="DeckListView">
          <Stack.Screen
            options={{ title: "DeckListView" }}
            name="DeckListView"
            Component={DeckListView}
          />
          <Stack.Screen
            name="IndividualDeckView"
            Component={IndividualDeckView}
            options={{ title: "IndividualDeckView" }}
          />
          <Stack.Screen
            options={{ title: "NewQuestionView" }}
            name="NewQuestionView"
            Component={NewQuestionView}
          />
          <Stack.Screen
            options={{ title: "QuizView" }}
            name="QuizView"
            Component={QuizView}
          />
          <Stack.Screen
            options={{ title: "ScoreView" }}
            name="ScoreView"
            Component={ScoreView}
          />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
  }
}

export default DeckListScreen;
