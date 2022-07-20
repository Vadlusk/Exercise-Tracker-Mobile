import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Title, Text, Caption, Button } from 'react-native-paper'

import Screen from '../../components/Screen'
import TotalTimeElapsedHeader from '../../components/TotalTimeElapsedHeader'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const Exercise = () => {
  const navigation = useNavigation()

  const { currentExercise: { name, sets, reps, time }, currentSet, isLastSet, isLastExercise, stopTotalTimeElapsed } = useCurrentRoutineContext()

  const onPress = () => {
    if (isLastSet && isLastExercise) {
      stopTotalTimeElapsed()
      navigation.navigate('FinishRoutine')
    } else {
      navigation.navigate('Rest')
    }
  }

  return (
    <Screen>
      <TotalTimeElapsedHeader />

      <Title>{name}</Title>

      {sets > 1 && (
        <>
          <Caption>set</Caption>
          <Text>{currentSet} / {sets}</Text>
        </>
      )}

      {reps && (
        <>
          <Caption>reps</Caption>
          <Text>{reps}</Text>
        </>
      )}
      {time && (
        <>
          <Caption>time</Caption>
          <Text>{time}</Text>
        </>
      )}

      <Button onPress={onPress}>Done</Button>
    </Screen>
  )
}

export default Exercise
