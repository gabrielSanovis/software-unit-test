import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AuthProvider } from '../src/context/AuthContext';
import RegisterScreen from '../src/screens/Register';

test('should register user successfully', () => {
  const { getByPlaceholderText, getByText } = render(
    <AuthProvider>
      <RegisterScreen navigation={{ navigate: jest.fn() }} />
    </AuthProvider>
  );

  fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
  fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
  fireEvent.press(getByText('Register'));

  expect(getByText('Cadastro')).toBeTruthy();
});

test('should reject duplicate email registration', () => {
  const mockNavigate = jest.fn();
  const { getByPlaceholderText, getByText, queryByText } = render(
    <AuthProvider>
      <RegisterScreen navigation={{ navigate: mockNavigate }} />
    </AuthProvider>
  );

  // Primeira tentativa de registro com um email válido
  fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
  fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
  fireEvent.press(getByText('Register'));

  // Simula reset do formulário
  fireEvent.changeText(getByPlaceholderText('Email'), '');
  fireEvent.changeText(getByPlaceholderText('Password'), '');

  // Segunda tentativa de registro com o mesmo email
  fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
  fireEvent.changeText(getByPlaceholderText('Password'), 'password1234');
  fireEvent.press(getByText('Register'));

  // Verifica se a mensagem de erro aparece
  expect(queryByText('Email already exists or password is too weak.')).toBeTruthy();
});

test('should reject registration with a password shorter than 8 characters', () => {
  const mockNavigate = jest.fn();
  const { getByPlaceholderText, getByText, queryByText } = render(
    <AuthProvider>
      <RegisterScreen navigation={{ navigate: mockNavigate }} />
    </AuthProvider>
  );

  // Tenta registrar um usuário com senha curta
  fireEvent.changeText(getByPlaceholderText('Email'), 'shortpass@example.com');
  fireEvent.changeText(getByPlaceholderText('Password'), '12345');
  fireEvent.press(getByText('Register'));

  // Verifica se a mensagem de erro aparece
  expect(queryByText('Email already exists or password is too weak.')).toBeTruthy();

  // Verifica se o usuário não foi redirecionado para a tela de login
  expect(mockNavigate).not.toHaveBeenCalled();
});