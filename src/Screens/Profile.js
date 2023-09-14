import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileBody from "../Components/Profile/ProfileBody";
import ProfileFooter from "../Components/Profile/ProfileFooter";
import ProfileHeadr from "../Components/Profile/ProfileHeadr";

function Profile({ navigation}) {
  return (
    <View style={styles.container}>
      <ProfileHeadr />
      <ProfileBody navigation={ navigation} />
      <ProfileFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
