import React, { useState } from 'react'
import { useNavigation, Link } from '@react-navigation/native'
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { TextInput, Button, Caption } from 'react-native-paper'

const CreateAccount = () => {
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
        style={[styles.input, styles.email]}
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCompleteType="email"
        autoFocus
      />
      <TextInput
        style={styles.input}
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
      <Caption>* must have at least 8 characters, one number, and an upper and lowercase letter</Caption>

      <Button
        style={[styles.input, styles.button]}
        mode="contained"
        onPress={() => { navigation.navigate('RoutineStack', { screen: 'SelectRoutine' }) }}
      >
        Create an account
      </Button>

      <Link to={{ screen: 'SignIn' }}>
        Sign In
      </Link>
    </KeyboardAvoidingView>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    paddingTop: 150
  },
  input: {
    width: '100%'
  },
  email: {
    marginBottom: 30
  },
  button: {
    marginTop: 30
  }
})
