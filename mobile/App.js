import { StatusBar } from "expo-status-bar";
import React from "react";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

import AppStack from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#7d40e7" />
      <AppStack />
    </>
  );
}
