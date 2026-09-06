import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home.js";
import Recipes from "../pages/RecipesList";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Recipes" component={Recipes} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default HomeNavigation;
