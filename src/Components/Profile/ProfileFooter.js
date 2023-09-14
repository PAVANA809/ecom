import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

function ProfileFooter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.share}>
        <Entypo name="share" size={24} color="black" />
        <Text>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout}>
        <Entypo name="log-out" size={24} color="black" />
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 30,
    height: Dimensions.get("window").height * 0.15,
    width: Dimensions.get("window").width * 0.95,
    marginTop: 8,
    elevation: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  share: {
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.grey,
    padding: 10,
    borderRadius: 20,
    width: Dimensions.get("window").width * 0.3,
  },
  logout:{
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.grey,
    padding: 10,
    borderRadius: 20,
    width: Dimensions.get("window").width * 0.3,
  },
});

export default ProfileFooter;
