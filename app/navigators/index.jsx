import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CurrentRoutineContextProvider } from '../hooks/CurrentRoutineContext'

import Exercise from '../screens/Exercise'
import SelectRoutine from '../screens/SelectRoutine'
import Rest from '../screens/Rest'
import StartRoutine from '../screens/StartRoutine'
import FinishRoutine from '../screens/FinishRoutine'

import CreateAccount from '../screens/CreateAccount'
import SignIn from '../screens/SignIn'

const Stack = createNativeStackNavigator()

const RoutineStack = () => (
  <Stack.Navigator initialRouteName="SelectRoutine" screenOptions={{ title: '' }}>
    <Stack.Screen name="Exercise" component={Exercise} />
    <Stack.Screen name="Rest" component={Rest} />
    <Stack.Screen name="StartRoutine" component={StartRoutine} />
    <Stack.Screen name="FinishRoutine" component={FinishRoutine} />
    <Stack.Screen name="SelectRoutine" component={SelectRoutine} />
  </Stack.Navigator>
)

const SignInStack = () => (
  <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CreateAccount" component={CreateAccount} />
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
)

const AppNavigator = () => {
  const isSignedIn = true

  return (
    <CurrentRoutineContextProvider>
      {isSignedIn ? <RoutineStack /> : <SignInStack />}
    </CurrentRoutineContextProvider>
  )
}

export default AppNavigator
