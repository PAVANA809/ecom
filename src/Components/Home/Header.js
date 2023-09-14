import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import Colors from '../../Shared/Colors';


function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome name="bars" size={40} color={Colors.darkgrey} />
      </TouchableOpacity>

      <View style={styles.search}>
        <FontAwesome name="search" size={30} color={Colors.darkgrey} />
        <TextInput style={styles.input}
          placeholderTextColor={Colors.darkgrey}
          placeholder="Search"
        />
      </View>
      <TouchableOpacity>
        
      </TouchableOpacity>
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
    width: "88%",
    borderRadius: 50,
    paddingHorizontal: 10,
    elevation: 10,
  },
  input: {
    color: Colors.black,
    width: "100%",
  },
});

export default Header;