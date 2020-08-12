import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main";
import Profile from "./screens/Profile";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#7D40e7",
          },
          headerBackTitleVisible: false,
        }}
      >
        <Screen
          name="Main"
          component={Main}
          options={{
            title: "DevRadar",
            headerTitleAlign: "center",
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Perfil no GitHub",
            headerTitleAlign: "center",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
