import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <SafeAreaView>
      <Text>rest for 90 seconds</Text>

      <Text>{REST_TIME - timeElapsed}</Text>

      <Button onPress={navigate}>Skip</Button>
    </SafeAreaView>
  )
}

export default Rest
