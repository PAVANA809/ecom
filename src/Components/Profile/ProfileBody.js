import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

function ProfileBody() {
  return (
    <View style={styles.container}>
      <Text>ProfileBody</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 30,
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width * 0.95,
    marginTop: 8,
    elevation: 5,
  },
});

export default ProfileBody;
