import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Home from "../Screens/Home";
import ItemDetails from "../Components/Home/ItemDetails";

const Stack = createStackNavigator();

function HomeScreenNav() {
    const isAndroid = Platform.OS === 'android';
  return (
    <Stack.Navigator
      screenOptions={{
              headerShown: false,
              gestureEnabled: true,
            ...(isAndroid && TransitionPresets.ModalPresentationIOS)
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreenNav;
