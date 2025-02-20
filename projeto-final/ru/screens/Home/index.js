import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../../components/Header';
import CardapioDoDia from '../../components/CardapioDoDia';
import { BotaoNavegacao } from '../../components/BotaoNavegacao';
import api from '../../api';

export function Home () {
  const [cardapio, setCardapio] = useState([]);
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchCardapioDoDia() {
      try {
        const hoje = new Date().toISOString().split('T')[0];
        const response = await api.get(`/cardapio/${hoje}`);
        setCardapio(response.data);
        setData(hoje.split('-').reverse().join('/')); 
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar o cardápio do dia:', error);
      }
    }

    fetchCardapioDoDia();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      
      <View style={styles.main}>
        <View style={styles.cardapioSection}>
          <CardapioDoDia data={data} pratos={cardapio} />
        </View>
        
        <View style={styles.botoesSection}>
          <BotaoNavegacao
            imagem={require('../../assets/reservas.png')}
            titulo="Reservas"
            margin={40}
            to="/reservas"
          />
          <BotaoNavegacao
            imagem={require('../../assets/cardapio.png')}
            titulo="Cardápio"
            margin={-40}
            to="/cardapio" 
          />
          <BotaoNavegacao
            imagem={require('../../assets/tickets.png')}
            titulo="Comprar Ticket"
            margin={40}
            to="/ticket"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#229017',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
  },
  cardapioSection: {
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 16,
  },
  botoesSection: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;