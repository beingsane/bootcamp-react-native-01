import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    usuario: "Diego",
    todos: [
      { id: 0, text: "Fazer café" },
      { id: 1, text: "Estudar o GoNative" }
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Novo todo" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box}>
          <Text style={styles.boxText}>Oi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center"
  },

  box: {
    backgroundColor: "#f00",
    width: 80,
    height: 80,
    margin: 10,
    transform: [{ rotateZ: "20deg" }]
  },

  boxText: {
    color: "#fff"
  }
});
