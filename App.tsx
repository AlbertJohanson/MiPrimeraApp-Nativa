import React from 'react'
import { SafeAreaView } from 'react-native'
// import { FlexScreen } from './src/screens/FlexScreen'
import { TareaScreen } from './src/screens/TareaScreen'
// import { DimesionsScreen } from './src/screens/DimesionsScreen'
// import { PositionScreen } from './src/screens/PositionScreen'
// import { BoxObjectModelScreen2 } from './src/screens/BoxObjectModelScreen2'
// import { CounterScreen } from './src/screens/CounterScreen'
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen'

const App = () => {
  return (
    <>
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
       {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen2 /> */}
      {/* <DimesionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen/> */}
      <TareaScreen />
    </SafeAreaView>
    </>
  )
}

export default App