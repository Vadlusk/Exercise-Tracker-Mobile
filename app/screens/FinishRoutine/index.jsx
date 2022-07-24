import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Title, Text, Button } from 'react-native-paper'

import Screen from '../../components/Screen'
import TimeDisplay from '../../components/TimeDisplay'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const FinishRoutine = () => {
  const navigation = useNavigation()

  const { resetCurrentRoutine, totalTimeElapsed } = useCurrentRoutineContext()

  return (
    <Screen>
      <Title>Congrats!</Title>

      <Text>Total time elapsed: </Text>
      <TimeDisplay timeInSeconds={totalTimeElapsed} />

      <Button onPress={() => {
        resetCurrentRoutine()
        navigation.reset({ index: 0, routes: [{ name: 'SelectRoutine' }] })
      }}
      >
        Back to main screen
      </Button>
    </Screen>
  )
}

export default FinishRoutine
