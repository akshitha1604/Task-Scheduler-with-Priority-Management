import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, navigation }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          toggleTaskCompletion={toggleTaskCompletion}
          navigation={navigation}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TaskList;