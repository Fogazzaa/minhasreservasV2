import api from "../axios/axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

export default function Principal({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button_toLogin}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button_toCadastro}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.text}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      padding: 20,
    },
    input: {
      width: 200,
      height: 40,
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button_Entrar: {
      backgroundColor: "gray",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#333",
      alignItems: "center",
      margin: 5,
    },
    button_toCadastro: {
      backgroundColor: "gray",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#333",
      alignItems: "center",
      margin: 5,
    },
    button_toLogin: {
        backgroundColor: "gray",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#333",
        alignItems: "center",
        margin: 5,
      },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 20,
    },
    text: {
      color: "white",
    },
  });