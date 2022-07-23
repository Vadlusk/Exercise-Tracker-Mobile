import React, { useState, useEffect, createContext, useContext } from 'react'
import { Appearance } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'
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
  const isSystemDark = Appearance.getColorScheme() === 'dark'
  const [isDarkMode, setIsDarkMode] = useState(isSystemDark)

  const evaluatedPaperTheme = isDarkMode ? darkPaperTheme : defaultPaperTheme
  const evaluatedNavigationTheme = isDarkMode ? DarkNavigationTheme : DefaultNavigationTheme

  const [paperTheme, setPaperTheme] = useState(evaluatedPaperTheme)
  const [navigationTheme, setNavigationTheme] = useState(evaluatedNavigationTheme)

  useEffect(() => {
    const getDarkModeFromAsyncStorage = async () => {
      try {
        const value = await AsyncStorage.getItem('@colorScheme')

        setIsDarkMode(value)
      } catch (e) {
        console.log(e)
      }
    }

    getDarkModeFromAsyncStorage()
  }, [])

  useEffect(() => {
    const setDarkModeInAsyncStorage = async () => {
      try {
        await AsyncStorage.setItem('@colorScheme', `${isDarkMode ? 'dark' : 'light'}`)
      } catch (e) {
        console.log(e)
      }
    }

    setPaperTheme(evaluatedPaperTheme)
    setNavigationTheme(evaluatedNavigationTheme)
    setDarkModeInAsyncStorage()
  }, [isDarkMode])

  return (
    <>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
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
