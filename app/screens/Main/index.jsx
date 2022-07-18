import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const Main = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Select a routine</Text>

      <View>
        <Button onPress={() => { navigation.navigate('RoutineStack') }}>Chest</Button>
      </View>
    </SafeAreaView>
  )
}

export default Main
