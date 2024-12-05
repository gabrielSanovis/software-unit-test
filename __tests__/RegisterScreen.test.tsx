import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AuthProvider } from '../src/context/AuthContext';
import RegisterScreen from '../src/screens/Register';

test('should register user successfully', () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(
    <AuthProvider>
      <RegisterScreen navigation={{ navigate: jest.fn() }} />
    </AuthProvider>
  );

  fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
  fireEvent.changeText(getByPlaceholderText('Senha'), 'password123');
  fireEvent.press(getByTestId('register'));

  expect(getByText('Cadastro')).toBeTruthy();
});

test('should reject duplicate email registration', () => {
  const mockNavigate = jest.fn();
  const { getByPlaceholderText, getByTestId, queryByText } = render(
    <AuthProvider>
      <RegisterScreen navigation={{ navigate: mockNavigate }} />
    </AuthProvider>
  );

  // Primeira tentativa de registro com um email válido
  fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
  fireEvent.changeText(getByPlaceholderText('Senha'), 'password123');
  fireEvent.press(getByTestId('register'));

  // Simula reset do formulário
  fireEvent.changeText(getByPlaceholderText('Email'), '');
  fireEvent.changeText(getByPlaceholderText('Senha'), '');

  // Segunda tentativa de registro com o mesmo email
  fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
  fireEvent.changeText(getByPlaceholderText('Senha'), 'password1234');
  fireEvent.press(getByTestId('register'));

  // Verifica se a mensagem de erro aparece
  expect(queryByText('Email already exists or password is too weak.')).toBeTruthy();
});

test('should reject registration with a password shorter than 8 characters', () => {
  const mockNavigate = jest.fn();
  const { getByPlaceholderText, getByTestId, queryByText } = render(
    <AuthProvider>
      <RegisterScreen navigation={{ navigate: mockNavigate }} />
    </AuthProvider>
  );

  // Tenta registrar um usuário com senha curta
  fireEvent.changeText(getByPlaceholderText('Email'), 'shortpass@example.com');
  fireEvent.changeText(getByPlaceholderText('Senha'), '12345');
  fireEvent.press(getByTestId('register'));

  // Verifica se a mensagem de erro aparece
  expect(queryByText('Email already exists or password is too weak.')).toBeTruthy();

  // Verifica se o usuário não foi redirecionado para a tela de login
  expect(mockNavigate).not.toHaveBeenCalled();
});