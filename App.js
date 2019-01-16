import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class App extends Component {
  state = {
    text: "",
    counter: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: "Hello World" });
    }, 3000);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.text };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5;
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  handleAddCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Text>{this.state.counter}</Text>
        <Button onPress={this.handleAddCounter} title="Add" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  }
});
