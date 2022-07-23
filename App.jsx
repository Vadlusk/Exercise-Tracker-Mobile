import React from 'react'

import AppNavigator from './app/navigators'

import { ThemeContextProvider } from './app/hooks/ThemeContext'

const App = () => (
  <ThemeContextProvider>
    <AppNavigator />
  </ThemeContextProvider>
)

export default App
