import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Platform, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        fontSize: 24,
      },
    }),
  },
});

const Todo = ({ title }) => (
  <View>
    {Platform.OS === 'ios' ? (
      <Text style={styles.text}>{`iOS - ${title}`}</Text>
    ) : (
      <Text style={styles.text}>{`Android - ${title}`}</Text>
    )}
  </View>
);

Todo.propTypes = {
  title: PropTypes.string,
};

Todo.defaultProps = {
  title: 'Todo padrão',
};

export default Todo;
