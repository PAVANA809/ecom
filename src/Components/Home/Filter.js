import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import Colors from '../../Shared/Colors';

function Filter() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Filter</Text>
      <Entypo name="chevron-small-down" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white,
        marginTop: 4,
        elevation: 20,
    },
});

export default Filter;