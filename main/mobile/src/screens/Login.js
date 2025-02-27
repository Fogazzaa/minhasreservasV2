import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import api from "../axios/axios";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  async function handleLogin() {
    await api.postLogin(usuario).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert("OK", response.data.message);
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
        console.log(error);
      }
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Login</Text>
      <TextInput
        placeholder="E-mail"
        value={usuario.email}
        onChangeText={(value) => {
          setUsuario({ ...usuario, email: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={usuario.senha}
        onChangeText={(value) => {
          setUsuario({ ...usuario, senha: value });
        }}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button_Entrar}>
        <Text style={styles.text}>Entrar</Text>
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    color: "white",
  },
});
