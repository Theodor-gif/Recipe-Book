import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddRecipe from "./pages/AddRecipe";
import Home from "./navigation/Home.navigation";
import Favorite from "./pages/FavoriteRecipe.js";
import ContextProvider from "./context/contextApi";
import FavoriteRecipe from "./pages/FavoriteRecipe.js";

const Tab = createNativeBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ContextProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="HOME"
              component={Home}
              options={{
                headerShown: false,
                title: "HOME",
                headerStyle: { backgroundColor: "#5B21B6" },
                headerTintColor: "#fff",
                tabBarIcon: {
                  type: "image",
                  source: require("./assets/Home-icon.png"),
                },
              }}
            />
            <Tab.Screen
              name="ADD"
              component={AddRecipe}
              options={{
                headerShown: false,
                title: "ADD",
                headerStyle: { backgroundColor: "#5B21B6" },
                headerTintColor: "#fff",
                tabBarIcon: {
                  type: "image",
                  source: require("./assets/Add-recipes-icon.png"),
                },
              }}
            />
            <Tab.Screen
              name="FAVORITE"
              component={FavoriteRecipe}
              options={{
                headerShown: false,
                title: "FAVORITE",
                headerStyle: { backgroundColor: "#5B21B6" },
                headerTintColor: "#fff",
                tabBarIcon: {
                  type: "image",
                  source: require("./assets/Favorite-icon.png"),
                  style: { width: 10, height: 10 },
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </SafeAreaProvider>
  );
}
