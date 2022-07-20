import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import TimeDisplay from '../TimeDisplay'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const TotalTimeElapsedHeader = () => {
  const { totalTimeElapsed } = useCurrentRoutineContext()

  return (
    <View>
      <Text>Total time elapsed: </Text><TimeDisplay timeInSeconds={totalTimeElapsed} />
    </View>
  )
}

export default TotalTimeElapsedHeader
