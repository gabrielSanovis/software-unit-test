import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../../../context/AuthContext';

export default function SuccessScreen() {
  const { loggedInUser } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Text>{loggedInUser?.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
