import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Filter from '../Components/Home/Filter';
import Header from '../Components/Home/Header';
import ItemList from '../Components/Home/ItemList';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Filter />
      <ItemList navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default Home;