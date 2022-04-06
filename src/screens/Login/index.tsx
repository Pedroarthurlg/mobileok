import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View>
      <KeyboardAvoidingView>
        <Text>Login</Text>
        <View>
          <MaterialIcons name="email" size={24} color="black" />
          <TextInput
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
