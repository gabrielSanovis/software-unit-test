import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { Field } from '../components/Field';

export default function RegisterScreen({ navigation }: any) {
  const { registerNewUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (registerNewUser(email, password) === "success") {
      navigation.navigate('Login');
    } else {
      setError('Email already exists or password is too weak.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Field.InputRoot>
          <Field.InputRead
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

        </Field.InputRoot>
      </Field.Root>

      <Field.Root>
        <Field.Label>Senha</Field.Label>
        <Field.InputRoot>
          <Field.InputRead
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </Field.InputRoot>
        <Field.Feedback
          type='wrong'
          show={!!error}
        >
          {error}
        </Field.Feedback>
      </Field.Root>

      <Button.Root
        testID="register"
        onPress={handleRegister}
      >
        <Button.Title>Cadastrar-se</Button.Title>
      </Button.Root>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  error: { color: 'red' },
});
