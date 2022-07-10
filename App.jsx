import React from 'react'
import { StatusBar } from 'expo-status-bar'

import Main from './app/screens/Main'

import { ThemeContextProvider } from './app/hooks/ThemeContext'

const App = () => (
  <>
    <StatusBar style="auto" />

    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  </>
)

export default App
