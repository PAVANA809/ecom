import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from "@expo/vector-icons";

import Colors from '../Shared/Colors';

function AdminPage({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.newItem}
        onPress={() => navigation.navigate("NewItemForm")}
      >
        <AntDesign name="pluscircle" size={40} color={Colors.green} />
        <Text style={styles.Text}>Add New Item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.newItem}>
        <AntDesign name="edit" size={40} color={Colors.brown} />
        <Text style={styles.Text}>Edit Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
  },
  newItem: {
    backgroundColor: Colors.grey,
    padding: 10,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.1,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 30,
    elevation: 5,
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginLeft: 20,
    fontFamily: 'Roboto',
  },
});

export default AdminPage;