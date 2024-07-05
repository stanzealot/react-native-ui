import React from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import navigationTheme from "./navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
    <AppNavigator />
   </NavigationContainer>
  )
}
