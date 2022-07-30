import React, { useState, useEffect, createContext, useContext } from 'react'
import { Appearance } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import PropTypes from 'prop-types'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  DefaultTheme as DefaultPaperTheme,
  DarkTheme as DarkPaperTheme,
  Provider as PaperThemeProvider
} from 'react-native-paper'
import {
  DefaultTheme as DefaultNavigationTheme,
  DarkTheme as DarkNavigationTheme,
  NavigationContainer
} from '@react-navigation/native'

const ThemeContext = createContext()

const defaultPaperTheme = {
  ...DefaultPaperTheme,
  roundness: 10
}

const darkPaperTheme = {
  ...DarkPaperTheme,
  colors: {
    ...DarkPaperTheme.colors,
    background: 'black',
    surface: '#121212'
  }
}

export const ThemeContextProvider = ({ children }) => {
  const systemColorScheme = Appearance.getColorScheme()
  const [colorScheme, setColorScheme] = useState(systemColorScheme)

  const evaluatedPaperTheme = colorScheme === 'dark' ? darkPaperTheme : defaultPaperTheme
  const evaluatedNavigationTheme = colorScheme === 'dark' ? DarkNavigationTheme : DefaultNavigationTheme

  const [paperTheme, setPaperTheme] = useState(evaluatedPaperTheme)
  const [navigationTheme, setNavigationTheme] = useState(evaluatedNavigationTheme)

  useEffect(() => {
    setPaperTheme(evaluatedPaperTheme)
    setNavigationTheme(evaluatedNavigationTheme)
  }, [colorScheme])

  useEffect(() => {
    setColorScheme(systemColorScheme)
  }, [systemColorScheme])

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

      <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
        <SafeAreaProvider>
          <PaperThemeProvider theme={paperTheme}>
            <NavigationContainer theme={navigationTheme}>
              {children}
            </NavigationContainer>
          </PaperThemeProvider>
        </SafeAreaProvider>
      </ThemeContext.Provider>
    </>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.shape({})
  ])
}

export const useThemeContext = () => useContext(ThemeContext)
