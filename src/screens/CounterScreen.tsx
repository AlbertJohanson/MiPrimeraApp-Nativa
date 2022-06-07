import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Counter:{' '}
        <Text style={{color: 'red', fontWeight: 'bold'}}>{counter}</Text>
      </Text>
      <Fab
         title="+1" 
         onPress={() => setCounter(counter + 1)}
         position="br"
      />
      <Fab
         title="-1"
         onPress={() => setCounter(counter - 1)}
         position="bl"

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#6effe7',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    top: -100,
    color: 'black',
  }
});
