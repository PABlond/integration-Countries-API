import "@expo/match-media";

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { CountryScreen, HomeScreen } from "./pages";

const Stack = createStackNavigator();

function App() {
  const linking = {
    config: {
      screens: {
        Home: "",
        Country: {
          path: "/:country",
          parse: {
            country: (country: string) => `country`,
          },
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking as any}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Country" component={CountryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
