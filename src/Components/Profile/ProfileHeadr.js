import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

function ProfileHeadr() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("./../../../assets/placeholder.png")}
      />
      <Text
        style={styles.text}
      >
        John Doe
          </Text>
    <Text style={styles.email}>John.Doe@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 30,
    height: Dimensions.get("window").height * 0.33,
    width: Dimensions.get("window").width * 0.95,
    alignSelf: "center",
    marginTop: 5,
    elevation: 5,

  },
  img: {
    width: Dimensions.get("window").width * 0.37,
    height: Dimensions.get("window").width * 0.37,
    borderRadius: (Dimensions.get("window").width * 0.37) / 2,
    borderWidth: 1,
    borderColor: "#fff",
    alignSelf: "center",
    marginTop: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 10,
        color: "black"
    },
    email: {
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 10,
        color: "black"
    }
});

export default ProfileHeadr;
