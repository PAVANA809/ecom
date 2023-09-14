import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Fav() {
  return (
    <View style={styles.container}>
        <Text>Fav</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Fav;