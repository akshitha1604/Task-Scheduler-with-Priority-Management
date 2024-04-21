import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import styles from '../utils/styles';

const PriorityFilter = ({ priorityFilter, setPriorityFilter }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterLabel}>Filter by Priority:</Text>
      <Button
        title="All"
        color={priorityFilter === 'all' ? 'blue' : 'gray'}
        onPress={() => setPriorityFilter('all')}
      />
      <Button
        title="Low"
        color={priorityFilter === 'low' ? 'green' : 'gray'}
        onPress={() => setPriorityFilter('low')}
      />
      <Button
        title="Medium"
        color={priorityFilter === 'medium' ? 'orange' : 'gray'}
        onPress={() => setPriorityFilter('medium')}
      />
      <Button
        title="High"
        color={priorityFilter === 'high' ? 'red' : 'gray'}
        onPress={() => setPriorityFilter('high')}
      />
    </View>
  );
};

export default PriorityFilter;