import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export const DimesionsScreen = () => {
  const {height, width} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 1,
          }}
        />
        <View style={styles.orangeBox} />
      </View>
      <View>
        <Text style={styles.title}>Width: {width}</Text>
        <Text style={styles.title}>Height: {height}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#FFCB05',
    width: '50%',
    height: '50%',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
