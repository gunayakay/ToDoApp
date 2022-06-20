import {TextInput, SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';
import React from 'react';
import Button from './src/Button/index'

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.app_name}>Yapılacaklar</Text>
      <TextInput placeholder="Yapılacak.." />
      <Button />   
      <FlatList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app_name: {
    paddingLeft: '24%',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
