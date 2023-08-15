import React from 'react'
import MainRoute from './src/routes'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <MainRoute />
    </Provider>
  )
}

export default App
