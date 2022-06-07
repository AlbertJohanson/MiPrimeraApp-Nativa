import React from 'react'
import { Text, View } from 'react-native'

export const HelloWorldScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: 45,
          color: 'red',
          textAlign: 'center'
        }}>Hello World</Text>
      </View>
  )
}
