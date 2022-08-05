import React, { useState } from 'react'
import { useNavigation, Link } from '@react-navigation/native'
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const SignIn = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCompleteType="email"
        autoFocus
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        autoCompleteType="password"
        secureTextEntry={!isPasswordVisible}
        right={
          <TextInput.Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        }
      />

      <Button
        style={styles.input}
        mode="contained"
        onPress={() => { navigation.navigate('RoutineStack', { screen: 'SelectRoutine' }) }}
      >
        Sign In
      </Button>

      <Link to={{ screen: 'CreateAccount' }}>
        Create an Account
      </Link>
    </KeyboardAvoidingView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    paddingTop: 150
  },
  error: {
    color: 'red'
  },
  input: {
    width: '100%',
    marginBottom: 15
  }
})
