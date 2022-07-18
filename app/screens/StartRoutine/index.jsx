import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const StartRoutine = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>title of routine</Text>

      <Text>Summary of routine (est time, exercises)</Text>

      <Button onPress={() => { navigation.navigate('Exercise') }}>Begin</Button>
    </SafeAreaView>
  )
}

export default StartRoutine
