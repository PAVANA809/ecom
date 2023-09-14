import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Home from "../Screens/Home";
import Fav from "../Screens/Fav";
import Cart from "../Screens/Cart";
import Profile from "../Screens/Profile";
import DrawerNav from "./DrawerNav";


const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Drawer"
            component={DrawerNav}
            options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Fav"
            component={Fav}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="heart" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="cart-plus" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" size={size} color={color}/>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
  }
});

export default BottomTab;
