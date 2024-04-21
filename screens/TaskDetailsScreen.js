import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from '../utils/styles';

const TaskDetailsScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <Text style={styles.taskDescription}>Priority: {task.priority}</Text>
      <Text style={styles.taskDescription}>
        Completed: {task.completed ? 'Yes' : 'No'}
      </Text>
    </View>
  );
};

export default TaskDetailsScreen;