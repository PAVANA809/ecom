import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Item from './Item';

const Items = [
    {
        id: 1,
        name: "Item 1",
        price: 100,
        image: require("./../../../assets/placeholder.png"),
    },
    {
        id: 2,
        name: "Item 2",
        price: 200,
        image: require("./../../../assets/placeholder.png"),
    },
    {
        id: 3,
        name: "Item 3",
        price: 300,
        image: require("./../../../assets/placeholder.png"),
    },
    {
        id: 4,
        name: "Item 4",
        price: 400,
        image: require("./../../../assets/placeholder.png"),
    },
    {
        id: 5,
        name: "Item 5",
        price: 500,
        image: require("./../../../assets/placeholder.png"),
    },
    {
        id: 6,
        name: "Item 6",
        price: 600,
        image: require("./../../../assets/placeholder.png"),
    },
    {
        id: 7,
        name: "Item 7",
        price: 700,
        image: require("./../../../assets/placeholder.png"),
    },
]

function ItemList({navigation}) {
  return (
      <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}
      >
      {Items.map((item) => (
        <Item item={item} key={item.id} navigation={navigation} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 0,
    }
});

export default ItemList;