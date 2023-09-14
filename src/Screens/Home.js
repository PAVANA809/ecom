import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Filter from '../Components/Home/Filter';
import Header from '../Components/Home/Header';
import ItemList from '../Components/Home/ItemList';

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Filter />
      <ItemList/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default Home;