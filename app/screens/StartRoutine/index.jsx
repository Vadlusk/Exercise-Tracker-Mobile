import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Button, List, Title } from 'react-native-paper'

import Screen from '../../components/Screen'

import { secondsToMinutes } from '../../helpers'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const StartRoutine = () => {
  const navigation = useNavigation()

  const { currentRoutine, startTotalTimeElapsed } = useCurrentRoutineContext()

  return (
    <Screen>
      <Title style={styles.title}>{currentRoutine?.title.toUpperCase()}</Title>

      {currentRoutine?.exercises.map(({ name, sets, reps, time }) => {
        let description = ''
        if (sets > 1) {
          description += `${sets} sets`
        }
        if ((reps || time) && sets > 1) {
          description += ', '
        }
        if (reps) {
          description += `${reps} reps`
        }
        if (time && time <= 60) {
          description += `${time} seconds${sets > 1 && ' per set'}`
        }
        if (time && time > 60) {
          description += `${secondsToMinutes(time)} minutes`
        }

        return <List.Item key={name} title={name} description={description} />
      })}

      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          startTotalTimeElapsed()
          navigation.navigate('Exercise')
        }}
      >
        Start Exercising
      </Button>
    </Screen>
  )
}

export default StartRoutine

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  button: {
    marginTop: 'auto'
  }
})
