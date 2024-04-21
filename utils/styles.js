import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 150,
    borderWidth: 4,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 20,
    marginRight: 8,
    marginBottom: 45,
  },
  priorityContainer: {
    flexDirection: 'row',
    alignItems: 'justify',
    marginRight: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  filterLabel: {
    marginRight: 8,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  lowPriority: {
    color: 'green',
  },
  mediumPriority: {
    color: 'orange',
  },
  highPriority: {
    color: 'red',
  },
  taskDescription: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default styles;