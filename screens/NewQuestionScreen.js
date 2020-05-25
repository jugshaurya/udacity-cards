import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NewDeckView from "../components/NewDeckView";

const Stack = createStackNavigator();
const NewQuestionScreen = () => {
  return (
    <Stack.Navigator initialRouteName="NewDeckView">
      <Stack.Screen
        options={{ title: "🎴 Add New Deck 🎴" }}
        name="NewDeckView"
        component={NewDeckView}
      />
    </Stack.Navigator>
  );
};

export default NewQuestionScreen;
