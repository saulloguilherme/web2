import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderCardapio } from '../../components/HeaderCardapio';
import { TabelaReservas } from '../../components/TabelaReservas';
import { Footer } from '../../components/Footer';

export function Reservas() {
  return (
    <View style={styles.container}>
      <HeaderCardapio 
        title="RESERVAS" 
        showBackButton={true} 
      />
      
      <View style={styles.content}>
        <TabelaReservas />
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
    alignItems: 'center',
  },
});