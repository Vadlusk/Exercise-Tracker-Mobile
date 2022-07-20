import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Title, Caption, Text, Button } from 'react-native-paper'

import Screen from '../../components/Screen'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const StartRoutine = () => {
  const navigation = useNavigation()

  const { currentRoutine, startTotalTimeElapsed } = useCurrentRoutineContext()

  return (
    <Screen>
      <Title>Start Exercising</Title>
      <Title>{currentRoutine?.title}</Title>

      <Caption>Summary:</Caption>
      {currentRoutine?.exercises.map(exercise => (
        <Text key={exercise.name}>- {exercise.name} sets: {exercise.sets} reps: {exercise.reps}</Text>
      ))}

      <Button onPress={() => { startTotalTimeElapsed(); navigation.navigate('Exercise') }}>Begin</Button>
    </Screen>
  )
}

export default StartRoutine
