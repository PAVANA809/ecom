import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

import { DrawerActions } from "@react-navigation/native";

function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <FontAwesome name="bars" size={40} color={Colors.darkgrey} />
      </TouchableOpacity>

      <View style={styles.search}>
        <FontAwesome name="search" size={30} color={Colors.darkgrey} />
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.darkgrey}
          placeholder="Search"
        />
      </View>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    elevation: 10,
    backgroundColor: Colors.white,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.grey,
    height: 40,
    width: "85%",
    borderRadius: 50,
    paddingHorizontal: 10,
    elevation: 10,
    overflow: "hidden",
  },
  input: {
    color: Colors.black,
    marginRight: 35,
  },
});

export default Header;
