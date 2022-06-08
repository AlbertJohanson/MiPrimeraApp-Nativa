import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 100,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
  },
});
