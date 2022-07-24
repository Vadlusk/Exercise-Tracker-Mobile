import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { Subheading, Title, Text, Caption, Button } from 'react-native-paper'

import Screen from '../../components/Screen'
import TimeDisplay from '../../components/TimeDisplay'
import TotalTimeElapsedHeader from '../../components/TotalTimeElapsedHeader'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const Exercise = () => {
  const navigation = useNavigation()

  const { currentExercise: { name, sets, reps, time }, currentSet, isLastSet, isLastExercise, stopTotalTimeElapsed } = useCurrentRoutineContext()

  const [timeRemainingForCurrentSet, setTimeRemainingForCurrentSet] = useState(time)

  let timer

  useEffect(() => {
    if (time) {
      setTimeRemainingForCurrentSet(time)

      timer = setInterval(() => {
        setTimeRemainingForCurrentSet(prevTime => prevTime - 1)
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }
  }, [])

  useEffect(() => {
    if (time) {
      setTimeRemainingForCurrentSet(time)
    }
  }, [name, currentSet])

  useEffect(() => {
    if (timeRemainingForCurrentSet === 0) { clearTimersAndNavigate() }
  }, [timeRemainingForCurrentSet])

  const clearTimersAndNavigate = () => {
    clearInterval(timer)

    if (isLastSet && isLastExercise) {
      stopTotalTimeElapsed()
      navigation.navigate('FinishRoutine')
    } else {
      navigation.navigate('Rest')
    }
  }

  return (
    <Screen>
      {!time && <TotalTimeElapsedHeader />}

      <Title>{name}</Title>

      {sets > 1 && (
        <>
          <Caption>set</Caption>
          <Text>{currentSet} / {sets}</Text>
        </>
      )}

      {reps && (
        <>
          <Caption>reps</Caption>
          <Text>{reps}</Text>
        </>
      )}

      {time && (
        <View style={styles.timerContainer}>
          <Subheading>time remaining</Subheading>
          <TimeDisplay timeInSeconds={timeRemainingForCurrentSet} style={styles.time} />
        </View>
      )}

      <Button onPress={clearTimersAndNavigate}>{time ? 'Skip' : 'Done'}</Button>
    </Screen>
  )
}

export default Exercise

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
