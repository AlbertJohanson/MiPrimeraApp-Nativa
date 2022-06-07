import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';

interface FabProps {
  title: string;
  position: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, position, onPress}: FabProps) => {

    const ios = () => {
        return (
            <TouchableOpacity activeOpacity={ 0.8 } onPress={onPress}  style={[
              styles.fabLocation,
              position === 'br' ? styles.right : styles.left,
            ]}>
              <View style={styles.fab}>
                <Text style={styles.fabText}> {title} </Text>
              </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
            style={[
              styles.fabLocation,
              position === 'br' ? styles.right : styles.left,
            ]}>
            <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#97fcec', false, 30)}>
              <View style={styles.fab}>
                <Text style={styles.fabText}> {title} </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        )
    }


  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  right: {
    right: 20,
  },
  left: {
    left: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
