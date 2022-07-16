import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../screens/Main'

const Stack = createNativeStackNavigator()

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={Main} />
  </Stack.Navigator>
)

export default AppNavigator
