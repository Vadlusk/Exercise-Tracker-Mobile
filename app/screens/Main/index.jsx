import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const Main = () => {
  const navigation = useNavigation()

  const { setCurrentRoutine } = useCurrentRoutineContext()

  return (
    <SafeAreaView>
      <Text>Select a routine</Text>

      <View>
      {['chest', 'legs', 'shoulders', 'back'].map((title) => (
        <Button
          key={title}
          onPress={() => {
            setCurrentRoutine(title)
            navigation.navigate('RoutineStack', { screen: 'StartRoutine', params: { title } })
          }}
        >
          {title.toUpperCase()}
        </Button>
      ))}
      </View>
    </SafeAreaView>
  )
}

export default Main
