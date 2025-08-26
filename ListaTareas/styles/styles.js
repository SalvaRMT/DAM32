import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1419', 
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a9eff', 
    marginBottom: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#1e2a3a',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  inputContainer: {
    backgroundColor: '#1e2a3a', 
    padding: 15,
    borderRadius: 15,
    elevation: 10,
    shadowColor: '#4a9eff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderWidth: 2,
    borderColor: '#2d5aa0',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#2d3748', 
    borderWidth: 2,
    borderColor: '#4a9eff',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#b8d4f0', 
    fontWeight: '500',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },

  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 8,
    shadowColor: '#4a9eff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderWidth: 2,
    flex: 1,
    alignItems: 'center',
  },
  
  addButton: {
    backgroundColor: '#2d5aa0', 
    borderColor: '#4a9eff',
  },

  clearButton: {
    backgroundColor: '#1e2a3a', 
    borderColor: '#7a9cc6', 
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  tasksCountContainer: {
    backgroundColor: '#1e2a3a',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#2d5aa0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tasksCountText: {
    color: '#4a9eff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  tasksCompletedText: {
    color: '#7a9cc6',
    fontSize: 14,
    fontWeight: '500',
  },

  tasksContainer: {
    flex: 1,
    marginBottom: 20,
  },

  taskItem: {
    backgroundColor: '#1e2a3a',
    borderRadius: 12,
    marginBottom: 12,
    padding: 15,
    borderWidth: 2,
    borderColor: '#2d5aa0',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#4a9eff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskCheckbox: {
    marginRight: 12,
    padding: 5,
  },

  checkboxText: {
    fontSize: 20,
  },

  taskText: {
    color: '#b8d4f0',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    lineHeight: 22,
  },

  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#7a9cc6',
    opacity: 0.7,
  },

  deleteButton: {
    backgroundColor: '#2d3748',
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#4a9eff',
  },

  deleteButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },

  emptyText: {
    fontSize: 64,
    marginBottom: 20,
  },

  emptyMessage: {
    color: '#4a9eff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },

  emptySubMessage: {
    color: '#7a9cc6',
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default styles;