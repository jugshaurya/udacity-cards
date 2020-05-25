import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import DeckListScreen from "./screens/DeckListScreen";
// import NewQuestionScreen from "./screens/NewQuestionScreen";

// const Tabs = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Hello</Text>
        {/* <Tabs.Navigator>
          <Tabs.Screen name="DeckListScreen" component={DeckListScreen} />
          <Tabs.Screen name="NewQuestionScreen" component={NewQuestionScreen} />
        </Tabs.Navigator> */}
      </View>
    );
  }
}

export default App;
