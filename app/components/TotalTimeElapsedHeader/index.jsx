import React from 'react'
import { StyleSheet } from 'react-native'
import { Caption } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

import TimeDisplay from '../TimeDisplay'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const TotalTimeElapsedHeader = () => {
  const { totalTimeElapsed } = useCurrentRoutineContext()

  return (
    <SafeAreaView style={styles.container}>
      <Caption>Total time elapsed: </Caption>
      <TimeDisplay timeInSeconds={totalTimeElapsed} />
    </SafeAreaView>
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
