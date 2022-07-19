import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const Exercise = () => {
  const navigation = useNavigation()

  const { currentExercise: { name, sets, reps, time }, currentSet } = useCurrentRoutineContext()

  return (
    <SafeAreaView>
      <Text>{name}</Text>

      {sets > 1 && (
        <Text>set {currentSet} / {sets}</Text>
      )}

      {reps && <Text>{reps} reps</Text>}
      {time && <Text>{time}</Text>}

      <Button onPress={() => { navigation.navigate('Rest') }}>Done</Button>
    </SafeAreaView>
  )
}

export default Exercise
