import React from 'react'
import MainRoute from './src/routes'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar hidden={true} />
        <MainRoute />
      </Provider>
    </GestureHandlerRootView>

  )
}

export default App
