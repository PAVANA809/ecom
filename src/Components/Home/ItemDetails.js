import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ItemDetails() {
  return (
    <View style={styles.container}>
        <Text>ItemDetails</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ItemDetails;