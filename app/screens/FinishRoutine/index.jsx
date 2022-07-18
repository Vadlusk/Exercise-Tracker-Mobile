import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const FinishRoutine = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Congrats</Text>

      <Text>cute animation</Text>
      <Text>Total time elapsed: </Text>

      <Button onPress={() => { navigation.navigate('Main') }}>Back to main screen</Button>
    </SafeAreaView>
  )
}

export default FinishRoutine
