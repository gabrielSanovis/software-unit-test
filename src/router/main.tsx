import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../module/auth/screens/Register';
import { NavigationProp } from "@react-navigation/native";
import LoginScreen from "../module/auth/screens/Login";
import SuccessScreen from "../module/welcome/screens/Success";

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