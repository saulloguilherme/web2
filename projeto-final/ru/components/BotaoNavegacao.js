// components/BotaoNavegacao.js
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-dom'; // Hook de navegação

export function BotaoNavegacao({ imagem, titulo, margin, to }) {
  const navigate = useNavigate();

  return (
    <TouchableOpacity 
      style={[styles.botaoContainer, { marginLeft: margin }]}
      onPress={() => navigate(to)}
    >
      <View style={styles.botaoContent}>
        <Image 
          source={imagem} 
          style={styles.botaoImagem} 
          resizeMode="contain"
        />
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoContainer: {
    backgroundColor: '#A6C988',
    borderRadius: 50,
    padding: 15,
    marginVertical: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
  },
  botaoContent: {
    alignItems: 'center',
  },
  botaoImagem: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  botaoTexto: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default BotaoNavegacao;