import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

export function TabelaReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    async function fetchReservas() {
      try {
        const response = await axios.get('http://localhost:3000/ticket');
        setReservas(response.data);
      } catch (error) {
        console.error('Erro ao buscar reservas:', error);
      }
    }

    fetchReservas();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Dia</Text>
      <Text style={styles.headerText}>Campus</Text>
      <Text style={styles.headerText}>Data</Text>
      <Text style={styles.headerText}>Situação</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{capitalizeFirstLetter(new Date(item.data).toLocaleDateString('pt-BR', { weekday: 'long' }))}</Text>
      <Text style={styles.cell}>{item.campus}</Text>
      <Text style={styles.cell}>{new Date(item.data).toLocaleDateString()}</Text>
      <Text style={styles.cell}>{item.situacao}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={reservas}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#A6C988',
    padding: 16,
    borderRadius: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  cell: {
    flex: 2,
    fontSize: 16,
    color: '#000',
  },
  list: {
    paddingBottom: 16,
  },
});