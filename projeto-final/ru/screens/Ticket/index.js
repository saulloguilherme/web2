import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from 'react-native';
import { HeaderCardapio } from '../../components/HeaderCardapio';
import { Footer } from '../../components/Footer';
import QRCode from 'react-native-qrcode-svg';

export function Ticket() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [campus, setCampus] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeValue, setQRCodeValue] = useState('');

  const generateLink = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    let texto = `Nome:${nome}\nMatrícula:${matricula}\nCampus:${campus}\nData:${currentDate.toLocaleDateString()}`;
    texto = encodeURIComponent(texto);
    const end_url = `https://wa.me/559481367234?text=${texto}`;
    setQRCodeValue(end_url);
    setShowQRCode(true);
  };

  return (
    <View style={styles.container}>
      <HeaderCardapio title="COMPRAR TICKET" showBackButton={true} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>FORMULÁRIO</Text>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome:</Text>
              <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome"
                placeholderTextColor="#777"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Matrícula:</Text>
              <TextInput
                style={styles.input}
                value={matricula}
                onChangeText={setMatricula}
                placeholder="Digite sua matrícula"
                placeholderTextColor="#777"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Campus de retirada:</Text>
              <TextInput
                style={styles.input}
                value={campus}
                onChangeText={setCampus}
                placeholder="Digite o campus"
                placeholderTextColor="#777"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={generateLink}>
          <Text style={styles.buttonText}>Ir para o pagamento</Text>
        </TouchableOpacity>

        {showQRCode && (
          <View style={styles.qrCodeContainer}>
            <Text style={styles.qrCodeText}>Escaneie o QR Code para pagamento:</Text>
            <QRCode
              value={qrCodeValue}
              size={200}
            />
          </View>
        )}

        <Text style={styles.priceText}>
          R$13,00 (treze reais) para os servidores e público em geral | R$2,00 (dois reais) para alunos de graduação subsidiados
        </Text>
      </ScrollView>

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
    flexGrow: 1,
    padding: 20,
  },
  formContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  formTitle: {
    fontSize: 23,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#A6C988',
    borderRadius: 50,
    width: '80%',
    height: 300, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputGroup: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    padding: 12,
    marginTop: 5,
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#006400',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  qrCodeText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 60,
  },
});