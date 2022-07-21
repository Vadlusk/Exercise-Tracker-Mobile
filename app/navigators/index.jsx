import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CurrentRoutineContextProvider } from '../hooks/CurrentRoutineContext'

import Exercise from '../screens/Exercise'
import SelectRoutine from '../screens/SelectRoutine'
import Rest from '../screens/Rest'
import StartRoutine from '../screens/StartRoutine'
import FinishRoutine from '../screens/FinishRoutine'

const Stack = createNativeStackNavigator()

const RoutineStack = () => (
  <Stack.Navigator initialRouteName="StartRoutine" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Exercise" component={Exercise} />
    <Stack.Screen name="Rest" component={Rest} />
    <Stack.Screen name="StartRoutine" component={StartRoutine} />
    <Stack.Screen name="FinishRoutine" component={FinishRoutine} />
  </Stack.Navigator>
)

const AppNavigator = () => (
  <CurrentRoutineContextProvider>
    <Stack.Navigator initialRouteName="SelectRoutine" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RoutineStack" component={RoutineStack} />
      <Stack.Screen name="SelectRoutine" component={SelectRoutine} />
    </Stack.Navigator>
  </CurrentRoutineContextProvider>
)

export default AppNavigator
