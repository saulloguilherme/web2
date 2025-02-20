import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-dom';

export function Header () {
  const navigate = useNavigate();

  return (
    <View style={styles.header}>
      <Image 
        source={require('../assets/unifesspa-ru.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigate('sobre/')}>
          <Text style={styles.navLink}>DÚVIDAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navSpacing} 
          onPress={() => navigate('sobre/')}
        >
          <Text style={styles.navLink}>SOBRE NÓS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#32553B',
    height: '10%',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 40,
  },
  nav: {
    flexDirection: 'row',
  },
  navLink: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 15,
  },
  navSpacing: {
    marginLeft: 20,
  },
});

export default Header;