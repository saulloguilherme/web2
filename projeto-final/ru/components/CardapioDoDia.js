import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function CardapioDoDia({ data, pratos }) {
  const categorias = {
    prato_principal: 'Prato Principal',
    op_vegetariana: 'Opção Vegetariana',
    acompanhamento: 'Acompanhamento',
    guarnicao: 'Guarnição',
    salada: 'Salada',
    sobremesa: 'Sobremesa'
  };

  return (
    <View style={styles.cardapioContainer}>
      <Text style={styles.tituloCardapio}>CARDÁPIO DO DIA</Text>
      <Text style={styles.dataCardapio}>{data}</Text>
      
      {pratos.length > 0 ? (
        Object.keys(categorias).map((categoria, index) => (
          <View key={index} style={styles.itemCardapio}>
            <View style={styles.tituloContainer}>
              <Text style={styles.tituloPrato}>{categorias[categoria]}</Text>
            </View>
            <View style={styles.conteudoContainer}>
              <Text style={styles.pratoConteudo}>{pratos[0][categoria]}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.semCardapio}>Não há cardápio disponível para hoje.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardapioContainer: {
    backgroundColor: '#32553B',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 20,
  },
  tituloCardapio: {
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  dataCardapio: {
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  itemCardapio: {
    marginVertical: 10,
  },
  tituloContainer: {
    backgroundColor: '#A6C988',
    padding: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tituloPrato: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conteudoContainer: {
    backgroundColor: '#32553B',
    padding: 12,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pratoConteudo: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  semCardapio: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CardapioDoDia;