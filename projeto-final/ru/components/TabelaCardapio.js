import { View, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function TabelaCardapio({ data }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const categorias = {
    prato_principal: 'Prato Principal',
    op_vegetariana: 'Opção Vegetariana',
    acompanhamento: 'Acompanhamento',
    guarnicao: 'Guarnição',
    salada: 'Salada',
    sobremesa: 'Sobremesa'
  };


  const filteredData = data.filter(item => {
    const day = new Date(item.data).getDay();
    return day >= 1 && day <= 5;
  });

  const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

  return (
    <ScrollView 
      horizontal={isMobile}
      contentContainerStyle={styles.container}
    >
           <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>COMPOSIÇÃO</Text>
          {diasDaSemana.map((dia, index) => (
            <Text key={index} style={[styles.cell, styles.headerCell]}>
              {capitalizeFirstLetter(dia)}
            </Text>
          ))}
        </View>

        {Object.keys(categorias).map((categoria, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            <Text style={[styles.cell, styles.categoryCell]}>{categorias[categoria]}</Text>
            {data.map((item, colIndex) => (
              <Text key={colIndex} style={styles.cell}>{item[categoria]}</Text>
            ))}
            </View>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    minHeight: 60,
  },
  headerRow: {
    backgroundColor: '#71BD39',
  },
  cell: {
    width: "20%",
    padding: 12,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  headerCell: {
    fontWeight: 'bold',
    color: 'black',
  },
  categoryCell: {
    backgroundColor: '#A6C988',
    fontWeight: 'bold',
  },
});