import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./src/components/Calculator";
import Title from "./src/components/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    height: "100%",
    padding: 0,
    backgroundColor: "#234",
    alignItems: "center",
    justifyContent: "center",
  },
});
