import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../utils/styles';

const TaskItem = ({ task, toggleTaskCompletion, navigation }) => {
  const handleNavigateToDetails = () => {
    navigation.navigate('TaskDetails', { task });
  };

  return (
    <TouchableOpacity onPress={handleNavigateToDetails}>
      <View style={styles.taskContainer}>
        <Text
          style={[
            styles.taskTitle,
            task.completed ? styles.completedTask : null,
            task.priority === 'low' ? styles.lowPriority : null,
            task.priority === 'medium' ? styles.mediumPriority : null,
            task.priority === 'high' ? styles.highPriority : null,
          ]}
        >
          {task.title}
        </Text>
        <Button
          title={task.completed ? 'Incomplete' : 'Complete'}
          onPress={() => toggleTaskCompletion(task.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;