import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Profile';

function Fav() {
  return (
    <View style={styles.container}>
        <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Fav;