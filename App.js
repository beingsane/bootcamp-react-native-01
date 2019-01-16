import './src/config/ReactotronConfig';

import React from 'react';
import { View, StyleSheet } from 'react-native';

import TodoList from '~/components/TodoList';

console.tron.log('Hello World');

const bgColor = '#f5f5f5';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <TodoList />
  </View>
);

export default App;
