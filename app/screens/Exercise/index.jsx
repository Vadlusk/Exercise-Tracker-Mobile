import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { Button, Subheading, Title, Text } from 'react-native-paper'

import Screen from '../../components/Screen'
import TotalTimeElapsedHeader from '../../components/TotalTimeElapsedHeader'

import { secondsToMinutes } from '../../helpers'

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

      <Title>{name.toUpperCase()}</Title>

      {sets > 1 && <Subheading>set {currentSet} out of {sets}</Subheading>}

      {reps && <Subheading>{reps} reps</Subheading>}

      {time && (
        <View style={styles.timerContainer}>
          <Subheading>time remaining</Subheading>
          <Text style={styles.time}>{secondsToMinutes(timeRemainingForCurrentSet)}</Text>
        </View>
      )}

      <Button style={styles.button} mode="contained" onPress={clearTimersAndNavigate}>{time ? 'Skip' : 'Done'}</Button>
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
  },
  button: {
    marginTop: 'auto'
  }
})
