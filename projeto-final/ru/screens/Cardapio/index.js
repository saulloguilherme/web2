import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import api from '../../api';
import { HeaderCardapio } from '../../components/HeaderCardapio';
import { TabelaCardapio } from '../../components/TabelaCardapio';
import { Footer } from '../../components/Footer';

export function Cardapio() {
  const [cardapio, setCardapio] = useState([]);

  useEffect(() => {
    async function fetchCardapio() {
      try {
        const response = await api.get('/cardapio');
        setCardapio(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar o cardápio:', error);
      }
    }

    fetchCardapio();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderCardapio title="CARDÁPIO" />
      <View style={styles.content}>
        <TabelaCardapio data={cardapio} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#229017',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});