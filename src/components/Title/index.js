import React from "react";
import { View, Text } from "react-native";
import { style } from "./styles";

export default function Title() {
  return (
    <View style={style.container}>
      <Text style={style.text}>J Calculator</Text>
    </View>
  );
}
