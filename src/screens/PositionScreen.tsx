import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.greenBox} />
        <View style={styles.purpleBox}/>
        <View style={styles.orangeBox} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#28C4D9'
    },
    purpleBox: {
        width: 100,
        height: 100,
        borderWidth:10,
        borderColor: '#F8F8FF',
        backgroundColor: '#7F00FF',
        position: 'absolute',
        top: 0,
        right: 0
    },
    orangeBox: {
        width: 100,
        height: 100,
        borderWidth:10,
        borderColor: '#F8F8FF',
        backgroundColor: '#FFCA28',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    greenBox: {
        // width: 100,
        // height: 100,
        borderWidth:10,
        borderColor: '#F8F8FF',
        backgroundColor: '#00FF00',
        // position: 'absolute',
        // bottom: 0,
        // left: 0
        ...StyleSheet.absoluteFillObject
    }
})
