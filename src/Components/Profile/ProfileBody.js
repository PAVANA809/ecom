import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Colors from "../../Shared/Colors";

function ProfileBody({ navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.orders} onPress={() => navigation.navigate("OrderList")}>
        <Text>Your orders</Text>
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
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width * 0.95,
    marginTop: 8,
    elevation: 5,
  },
  orders: {
    backgroundColor: Colors.grey,
    padding: 10,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  }

});

export default ProfileBody;
