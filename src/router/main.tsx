import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import SuccessScreen from '../screens/Success';
import { NavigationProp } from "@react-navigation/native";

export type ScreenNames = ["Login", "Register", "Success"]
export type MainStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<MainStackParamList>;


const Stack = createNativeStackNavigator<MainStackParamList>();

export const Main = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
  );
};