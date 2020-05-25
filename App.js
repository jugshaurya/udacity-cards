import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";
import DeckListScreen from "./screens/DeckListScreen";
import NewQuestionScreen from "./screens/NewQuestionScreen";

const Tabs = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer style={{ flex: 1 }}>
          <Tabs.Navigator>
            <Tabs.Screen name="DeckListScreen" component={DeckListScreen} />
            <Tabs.Screen
              name="NewQuestionScreen"
              component={NewQuestionScreen}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
