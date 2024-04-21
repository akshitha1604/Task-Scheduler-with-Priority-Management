import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AddTask from '../components/AddTask';
import PriorityFilter from '../components/PriorityFilter';
import TaskList from '../components/TaskList';
import styles from '../utils/styles';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState('all');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks =
    priorityFilter === 'all'
      ? tasks
      : tasks.filter((task) => task.priority === priorityFilter);

  return (
    <View style={styles.container}>
      <AddTask addTask={addTask} />
      <PriorityFilter
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        navigation={navigation}
      />
    </View>
  );
};

export default HomeScreen;