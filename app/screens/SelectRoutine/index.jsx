import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Title, Button } from 'react-native-paper'

import Screen from '../../components/Screen'

import HistorySection from './HistorySection'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const Main = () => {
  const navigation = useNavigation()

  const { setCurrentRoutine } = useCurrentRoutineContext()

  return (
    <Screen>
      <Title>Select a routine</Title>

      <View>
      {['chest', 'legs', 'shoulders', 'back', 'abs'].map((title) => (
        <Button
          key={title}
          mode="outlined"
          onPress={() => {
            setCurrentRoutine(title)
            navigation.navigate('StartRoutine', { params: { title } })
          }}
        >
          {title.toUpperCase()}
        </Button>
      ))}
      </View>

      <HistorySection />
    </Screen>
  )
}

export default Main
