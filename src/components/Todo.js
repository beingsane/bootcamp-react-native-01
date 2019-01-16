import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.propTypes = {
  title: PropTypes.string,
};

Todo.defaultProps = {
  title: 'Todo padrão',
};

export default Todo;
