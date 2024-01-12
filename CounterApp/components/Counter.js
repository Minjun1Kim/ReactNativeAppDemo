import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const Counter = ({ initialValues }) => {
  const [counters, setCounters] = useState(initialValues.map((value) => ({ id: uuidv4(), count: value })));

  const increment = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  };

  const decrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count - 1 } : counter
      )
    );
  };

  return (
    <View style={styles.container}>
      {counters.map((counter) => (
        <View key={counter.id}>
          <Text style={styles.text}>Counter Value: {counter.count}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Increment" onPress={() => increment(counter.id)} />
            <Button title="Decrement" onPress={() => decrement(counter.id)} />
          </View>
        </View>
      ))}
    </View>
  );
};

Counter.defaultProps = {
  initialValues: [0],
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default Counter;
