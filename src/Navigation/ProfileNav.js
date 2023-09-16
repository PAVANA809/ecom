import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import Profile from '../Screens/Profile'
import AdminPage from '../Screens/AdminPage';
import NewItemForm from '../Screens/NewItemForm';

const Stack = createStackNavigator();


export default function ProfileNav() {
  return (
      <Stack.Navigator
          screenOptions={{
                headerShown: false,
            }}
      >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AdminPage" component={AdminPage} />
      <Stack.Screen name="NewItemForm" component={NewItemForm} />
    </Stack.Navigator>
  );
}