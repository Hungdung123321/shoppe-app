import React from 'react'
import MainRoute from './src/routes'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <StatusBar hidden={true} />
          <MainRoute />
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>

  )
}

export default App
