import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-dom';

export function HeaderCardapio({ title, showBackButton = true }) {
  const navigate = useNavigate();

  return (
    <View style={styles.header}>
      <Image 
        source={require('../assets/unifesspa-ru.png')} 
        style={styles.logo} 
      />
      <Text style={styles.title}>{title}</Text>
      
      {showBackButton && (
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigate('/')}
        >
          <Text style={styles.buttonText}>VOLTAR</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#32553B',
    height: 80,
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#A6C988',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#32553B',
    fontWeight: 'bold',
  },
});