import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OpenMeteoWeather from './components/OpenMeteoWeather';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather App</Text>
      <OpenMeteoWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
