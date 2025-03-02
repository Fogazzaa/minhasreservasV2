import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import api from "../services/axios";

function Principal({ navigation }) {
  const [salas, setSalas] = useState([]);

  async function getSalas() {
    await api.getSalas().then(
      (response) => {
        setSalas(response.data.salas);
      },
      (error) => {
        console.log("Erro", error);
      }
    );
  }

  useEffect(() => {
    getSalas();
  }, []);

  const listSalas = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.tableCell, styles.nome]}>{item.nome}</Text>
      <Text style={[styles.tableCell, styles.descricao]}>{item.descricao}</Text>
      <Text style={[styles.tableCell, styles.bloco]}>{item.bloco}</Text>
      <Text style={[styles.tableCell, styles.tipo]}>{item.tipo}</Text>
      <Text style={[styles.tableCell, styles.capacidade]}>
        {item.capacidade}
      </Text>
    </View>
  );

  return (
    <ImageBackground
      source={require("../../img/fundo.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Nome</Text>
          <Text style={styles.tableHeaderCell}>Descrição</Text>
          <Text style={styles.tableHeaderCell}>Bloco</Text>
          <Text style={styles.tableHeaderCell}>Tipo</Text>
          <Text style={styles.tableHeaderCell}>Capacidade</Text>
        </View>
        <FlatList
          data={salas}
          renderItem={listSalas}
          keyExtractor={(sala) => sala.id_sala.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "gray",
    padding: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  tableHeaderCell: {
    flex: 1,
    marginLeft:10,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "white",
  },
  row: {
    justifyContent: "flex-start",
    alignItems: "center",
    justifyContent: "end",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorinzontal: 10,
    borderWidth: 1.5,
    borderColor: "white",
    backgroundColor: "#949494",
  },
  tableCell: {
    marginLeft:2,
    paddingHorizontal: 2,
    paddingVertical: 5,
    flex: 1,
    color: "white",
    textAlign: "center",
  },
  nome: {
    flex: 1.3,
    fontWeight: "bold",
  },
  descricao: {
    flex: 2,
  },
  bloco: {
    flex: 1,
  },
  tipo: {
    flex: 1.2,
    fontStyle: "italic",
  },
  capacidade: {
    flex: 1,
  },
});

export default Principal;
