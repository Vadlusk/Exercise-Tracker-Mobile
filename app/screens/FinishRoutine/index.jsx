import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { Text, Button, Caption } from 'react-native-paper'

import Screen from '../../components/Screen'

import { secondsToMinutes } from '../../helpers/'

import { useCurrentRoutineContext } from '../../hooks/CurrentRoutineContext'

const FinishRoutine = () => {
  const navigation = useNavigation()

  const { resetCurrentRoutine, totalTimeElapsed } = useCurrentRoutineContext()

  return (
    <Screen>
      <View style={styles.screen}>
        <Text style={styles.title}>Congrats!</Text>

        <Caption style={styles.timeElapsed}>Total time elapsed:</Caption>
        <Caption style={styles.timeElapsed}>{secondsToMinutes(totalTimeElapsed)} minutes</Caption>
      </View>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => {
          resetCurrentRoutine()
          navigation.reset({ index: 0, routes: [{ name: 'SelectRoutine' }] })
        }}
      >
        Back to main screen
      </Button>
    </Screen>
  )
}

export default FinishRoutine

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginBottom: 20,
    fontSize: 50
  },
  timeElapsed: {
    fontSize: 20
  },
  button: {
    marginTop: 'auto'
  }
})
