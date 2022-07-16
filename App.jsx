import React from 'react'
import { StatusBar } from 'expo-status-bar'

import AppNavigator from './app/navigators'

import { ThemeContextProvider } from './app/hooks/ThemeContext'

const App = () => (
  <>
    <StatusBar style="auto" />

    <ThemeContextProvider>
      <AppNavigator />
    </ThemeContextProvider>
  </>
)

export default App
