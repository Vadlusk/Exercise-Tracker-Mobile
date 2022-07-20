import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Screen = ({ children }) => (
  <SafeAreaView style={styles.screen}>
    {children}
  </SafeAreaView>
)

Screen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.shape({})
  ])
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop: 15,
    paddingHorizontal: 15
  }
})
