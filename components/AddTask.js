import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import styles from '../utils/styles';

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('low');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask({ id: Date.now(), title: newTask, priority: newPriority, completed: false });
      setNewTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="New Task"
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      <View style={styles.priorityContainer}>
        <Button
          title="Low"
          color={newPriority === 'low' ? 'green' : 'gray'}
          onPress={() => setNewPriority('low')}
        />
        <Button
          title="Medium"
          color={newPriority === 'medium' ? 'orange' : 'gray'}
          onPress={() => setNewPriority('medium')}
        />
        <Button
          title="High"
          color={newPriority === 'high' ? 'red' : 'gray'}
          onPress={() => setNewPriority('high')}
        />
      </View>
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default AddTask;