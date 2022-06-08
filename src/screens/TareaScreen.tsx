import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.blueBox} />
        <View style={styles.purpleBox}/>
        <View style={styles.orangeBox} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        backgroundColor: '#28425B',
    },
    purpleBox: {
        width: 100,
        height: 100,
        top: 50,
        borderWidth: 10,
        borderColor: '#FF00FF',
        backgroundColor: '#7F00FF',
    },
    orangeBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#FF00FF',
        backgroundColor: '#FFCA28',
    },
    blueBox: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#FF00FF',
        backgroundColor: '#00FFFF',
    },
})
