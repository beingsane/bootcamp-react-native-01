import "./src/config/ReactotronConfig";

import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

console.tron.log("Hello World");

export default class App extends Component {
  render() {
    return <View style={styles.container} />;
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
