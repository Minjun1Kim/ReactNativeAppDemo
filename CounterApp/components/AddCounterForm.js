// AddCounterForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

const AddCounterForm = ({ onAddCounter }) => {
  const [initialValue, setInitialValue] = useState('');

  const handleAddCounter = () => {
    if (initialValue.trim() !== '') {
      onAddCounter(Number(initialValue));
      setInitialValue('');

      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.addCounterForm}>
      <TextInput
        style={styles.input}
        placeholder="Enter initial counter value"
        value={initialValue}
        onChangeText={(text) => setInitialValue(text)}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <Button title="Add Counter" onPress={handleAddCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  addCounterForm: {
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddCounterForm;
