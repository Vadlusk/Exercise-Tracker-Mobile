import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const REST_TIME = 5

const Rest = () => {
  const navigation = useNavigation()

  const [timeElapsed, setTimeElapsed] = useState(0)

  let timer

  useEffect(() => {
    timer = setInterval(() => {
      setTimeElapsed(prevCount => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (timeElapsed === REST_TIME) {
      clearInterval(timer)
      navigation.navigate('FinishRoutine')
    }
  }, [timeElapsed])

  return (
    <SafeAreaView>
      <Text>rest for 90 seconds</Text>

      <Text>{REST_TIME - timeElapsed}</Text>

      <Button onPress={() => { navigation.navigate('FinishRoutine') }}>Skip</Button>
    </SafeAreaView>
  )
}

export default Rest
