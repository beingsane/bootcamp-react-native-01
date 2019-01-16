import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';

import Todo from '~/components/Todo';

const bgColor = '#333';

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
    <Todo title="Fazer café" />
    <Todo title="Estudar o GoNative" />
  </View>
);

export default App;
