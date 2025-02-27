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

export default function Cadastro({ navigation }) {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    NIF: "",
    senha: "",
  });

  async function handleCadastro() {
    await api.postCadastro(usuario).then(
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
      <Text style={styles.title}>Faça Cadastro</Text>
      <TextInput
        placeholder="Nome"
        value={usuario.nome}
        onChangeText={(value) => {
          setUsuario({ ...usuario, nome: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        value={usuario.email}
        onChangeText={(value) => {
          setUsuario({ ...usuario, email: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="NIF"
        value={usuario.NIF}
        onChangeText={(value) => {
          setUsuario({ ...usuario, NIF: value });
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
      <TouchableOpacity onPress={handleCadastro} style={styles.button_Entrar}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button_toLogin}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>Login</Text>
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
