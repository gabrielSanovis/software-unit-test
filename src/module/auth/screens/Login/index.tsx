import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../../../context/AuthContext';
import { Button } from '../../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../../../router/main';
import { Field } from '../../../../components/Field';

type NavigationProps = NativeStackNavigationProp<MainStackParamList, "Login">

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { navigate } = useNavigation<NavigationProps>();

  const handleLogin = () => {
    if (login(email, password)) {
      navigate("Success");
    } else {
      setError('Invalid email or password.');
    }
  };

  const goToRegister = () => {
    navigate("Register")
  }

  return (
    <View style={styles.container}>
      <Text>Autenticação</Text>
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

      <View style={styles.wrapperBtn}>
        <Button.Root
          onPress={handleLogin}
          variant='primary'
        >
          <Button.Title>Entrar</Button.Title>
        </Button.Root>

        <Button.Root
          onPress={goToRegister}
          variant='outline'
        >
          <Button.Title>Cadastrar</Button.Title>
        </Button.Root>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  error: { color: 'red' },
  wrapperBtn: { rowGap: 16 }
});
