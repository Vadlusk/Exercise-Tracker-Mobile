import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <SafeAreaView>
      <TotalTimeElapsedHeader />

      <Text>{name}</Text>

      {sets > 1 && (
        <Text>set {currentSet} / {sets}</Text>
      )}

      {reps && <Text>{reps} reps</Text>}
      {time && <Text>{time}</Text>}

      <Button onPress={onPress}>Done</Button>
    </SafeAreaView>
  )
}

export default Exercise
