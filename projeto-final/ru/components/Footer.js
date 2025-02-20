// components/Footer.js
import { View, Image, Text, StyleSheet } from 'react-native';

export function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.contacts}>
        <Text style={styles.title}>Contatos</Text>
        <View style={styles.contactGroup}>
          <View style={styles.contact}>
            <Image source={require('../assets/zap.png')} style={styles.icon} />
            <Text>(94) 2101-7167</Text>
            <Text>PROEX</Text>
          </View>
          <View style={styles.contact}>
            <Image source={require('../assets/zap.png')} style={styles.icon} />
            <Text>(94) 8136-7234</Text>
            <Text>RESTAURANTE</Text>
          </View>
        </View>
      </View>
      
      <Image 
        source={require('../assets/unifesspa.png')} 
        style={styles.logo} 
      />
      
      <Text style={styles.warning}>
        Não esqueça de apresentar documento com foto{'\n'}
        no momento da retirada do seu{'\n'} 
        ticket ou marmita!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderTopWidth: 2,
    borderColor: '#32553B',
  },
  contacts: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contactGroup: {
    flexDirection: 'row',
    gap: 20,
  },
  contact: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  warning: {
    color: '#32553B',
    textAlign: 'center',
    fontSize: 14,
  },
});