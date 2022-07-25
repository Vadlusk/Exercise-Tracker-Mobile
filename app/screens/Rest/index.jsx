import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { Button, Subheading, Text } from 'react-native-paper'

import Screen from '../../components/Screen'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const REST_TIME = 90

const Rest = () => {
  const navigation = useNavigation()

  const [timeElapsed, setTimeElapsed] = useState(0)

  const { isLastSet, isLastExercise, setNextSetOrSetAndExercise } = useCurrentRoutineContext()

  let timer

  useEffect(() => {
    timer = setInterval(() => {
      setTimeElapsed(prevCount => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const navigate = () => {
    if (isLastExercise && isLastSet) {
      navigation.navigate('FinishRoutine')
    } else {
      setNextSetOrSetAndExercise()

      navigation.navigate('Exercise')
    }
  }

  useEffect(() => {
    if (timeElapsed === REST_TIME) {
      clearInterval(timer)

      navigate()
    }
  }, [timeElapsed])

  return (
    <Screen>
      <View style={styles.timerContainer}>
        <Subheading>rest for 90 seconds</Subheading>

        <Text style={styles.time}>{REST_TIME - timeElapsed}</Text>
      </View>

      <Button mode="contained" onPress={navigate}>Skip</Button>
    </Screen>
  )
}

export default Rest

const styles = StyleSheet.create({
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    fontSize: 50
  }
})
