import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <Image source={require("../../assets/lazaro.png")} />
        <Text>Lázaro Eduardo da Silva</Text>
      </ImageBackground>
    </View>
  );
}
