import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function OrderList() {
  return (
    <View style={styles.container}>
        <Text>OrderList</Text>
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

export default OrderList;