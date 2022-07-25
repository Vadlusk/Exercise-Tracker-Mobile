import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Caption, Text } from 'react-native-paper'

import { secondsToMinutes } from '../../helpers'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const TotalTimeElapsedHeader = () => {
  const { totalTimeElapsed } = useCurrentRoutineContext()

  return (
    <View style={styles.container}>
      <Caption>Total time elapsed: </Caption>
      <Text>{secondsToMinutes(totalTimeElapsed)}</Text>
    </View>
  )
}

export default TotalTimeElapsedHeader

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 15
  }
})
