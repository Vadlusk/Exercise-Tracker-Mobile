import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native-paper'

const TimeDisplay = ({ timeInSeconds, ...props }) => {
  const minutes = Math.floor(timeInSeconds / 60)
  let seconds = timeInSeconds - minutes * 60

  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  return <Text {...props}>{minutes}:{seconds} mins</Text>
}

TimeDisplay.propTypes = {
  timeInSeconds: PropTypes.number.isRequired
}

export default TimeDisplay
