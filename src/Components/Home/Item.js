import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function Item({ item, navigation}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() =>
      navigation.navigate("ItemDetails", { item: item })
    }>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 4,
        marginHorizontal: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 2,
    },
    image: {
        height: 120,
        width: 120,
        alignSelf: "center",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 8,
        width: "100%",

    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 8,
    },
    price: {
        fontSize: 16,
        marginLeft: 8,
    },
});

export default Item;