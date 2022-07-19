import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const FinishRoutine = () => {
  const navigation = useNavigation()

  const { resetCurrentRoutine } = useCurrentRoutineContext()

  return (
    <SafeAreaView>
      <Text>Congrats</Text>

      <Text>cute animation</Text>
      <Text>Total time elapsed: </Text>

      <Button onPress={() => {
        resetCurrentRoutine()
        navigation.reset({ index: 0, routes: [{ name: 'Main' }] })
      }}
      >
        Back to main screen
      </Button>
    </SafeAreaView>
  )
}

export default FinishRoutine
