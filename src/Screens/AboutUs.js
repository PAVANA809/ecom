import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AboutUs() {
  return (
    <View style={styles.container}>
        <Text>AboutUs</Text>
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

export default AboutUs;