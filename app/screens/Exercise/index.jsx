import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const Exercise = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>title of exercise</Text>
      <Text>Set number (unless only one set)</Text>
      <Text>Num of reps / amount of time</Text>

      <Button onPress={() => { navigation.navigate('Rest') }}>Done</Button>
    </SafeAreaView>
  )
}

export default Exercise
