import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

const Screen = ({ children }) => (
  <View style={styles.screen}>
    {children}
  </View>
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
    flex: 1,
    padding: 15,
    paddingBottom: 40
  }
})
