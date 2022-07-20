import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const StartRoutine = () => {
  const navigation = useNavigation()

  const { currentRoutine, startTotalTimeElapsed } = useCurrentRoutineContext()

  return (
    <SafeAreaView>
      <Text>{currentRoutine?.title}</Text>

      <Text>Summary</Text>
      {currentRoutine?.exercises.map(exercise => (
        <Text key={exercise.name}>{exercise.name} sets: {exercise.sets} reps: {exercise.reps}</Text>
      ))}

      <Button onPress={() => { startTotalTimeElapsed(); navigation.navigate('Exercise') }}>Begin</Button>
    </SafeAreaView>
  )
}

export default StartRoutine
