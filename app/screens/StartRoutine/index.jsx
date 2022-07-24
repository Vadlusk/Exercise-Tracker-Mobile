import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Title, Caption, Subheading, Text, Button } from 'react-native-paper'

import Screen from '../../components/Screen'
import TimeDisplay from '../../components/TimeDisplay'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const StartRoutine = () => {
  const navigation = useNavigation()

  const { currentRoutine, startTotalTimeElapsed } = useCurrentRoutineContext()

  return (
    <Screen>
      <Title>Start Exercising</Title>
      <Title>{currentRoutine?.title}</Title>

      <Caption>Summary:</Caption>
      {currentRoutine?.exercises.map(({ name, sets, reps, time }) => (
        <View key={name}>
          <Subheading>{name}</Subheading>
          {sets > 1 && <Text>{sets} sets</Text>}
          {reps && <Text>{reps} reps</Text>}
          {time && (
            <>
              <TimeDisplay timeInSeconds={time} />
              {sets > 1 && <Text>per set</Text>}
            </>
          )}
        </View>
      ))}

      <Button onPress={() => { startTotalTimeElapsed(); navigation.navigate('Exercise') }}>Begin</Button>
    </Screen>
  )
}

export default StartRoutine
