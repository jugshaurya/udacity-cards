import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import store from "./redux/store";
import DeckListScreen from "./screens/DeckListScreen";
import NewQuestionScreen from "./screens/NewQuestionScreen";

const Tabs = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="#364f6b"
      />
      <NavigationContainer
        style={{
          flex: 1,
          background: "#f0f0f0",
          // paddingTop: Constants.statusBarHeight,
        }}
      >
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "All Decks") {
                const iconName = focused ? "cards" : "cards-outline";
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "New Deck") {
                return focused ? (
                  <Entypo name="new-message" size={size} color={color} />
                ) : (
                  <MaterialIcons name="fiber-new" size={size} color={color} />
                );
              }
            },
          })}
        >
          <Tabs.Screen name="All Decks" component={DeckListScreen} />
          <Tabs.Screen name="New Deck" component={NewQuestionScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
