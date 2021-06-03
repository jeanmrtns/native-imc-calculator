import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { style } from "./styles";

export default function Calculator() {
  const [height, setHeight] = React.useState();
  const [weight, setWeight] = React.useState();
  const [result, setResult] = React.useState();
  const [imc, setImc] = React.useState();

  function handleHeight(text) {
    setHeight(Number(text));
  }

  function handleWeight(text) {
    setWeight(Number(text));
  }

  function handlePress() {
    setImc((weight / height ** 2).toFixed(2));

    if (imc <= 16.9) setResult("Muito abaixo do peso");
    else if (imc <= 18.4) setResult("Abaixo do peso");
    else if (imc <= 24.9) setResult("Peso normal");
    else if (imc <= 29.9) setResult("Acima do peso");
    else if (imc <= 34.9) setResult("Obesidade Grau I");
    else if (imc <= 40.9) setResult("Obesidade Grau II");
    else if (imc >= 41) setResult("Obesidade Grau III");
  }

  return (
    <View>
      <Text style={style.text}>Informe sua altura:</Text>
      <TextInput
        style={style.input}
        placeholder="Ex: 1.73"
        keyboardType="numeric"
        onChangeText={handleHeight}
      ></TextInput>

      <Text style={style.text}>Informe seu peso:</Text>
      <TextInput
        style={style.input}
        placeholder="Ex: 75kg"
        keyboardType="numeric"
        onChangeText={handleWeight}
      ></TextInput>

      <Button title="Calcular" color="#700" onPress={handlePress} />

      {imc ? (
        <Text style={style.result}>
          Seu IMC é {imc} = {result}
        </Text>
      ) : null}
    </View>
  );
}
