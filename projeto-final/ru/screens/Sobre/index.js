import { View, Text, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';
import { HeaderCardapio } from '../../components/HeaderCardapio';
import { Footer } from '../../components/Footer';

export function Sobre() {
  const handleContact = () => {
  };

  return (
    <View style={styles.container}>
      <HeaderCardapio title="DÚVIDAS/SOBRE" showBackButton={true} />
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.sectionDuvidas}>
          <Text style={styles.title}>DÚVIDAS</Text>
          
          <View style={styles.linksContainer}>
            <TouchableOpacity 
              onPress={() => Linking.openURL('https://ru.unifesspa.edu.br/noticias/97-entenda-como-vai-funcionar-a-política-de-alimentações-subsidiadas-para-discentes-de-graduação-no-ru-a-partir-de-março-2022.html')}
              style={styles.linkItem}
            >
              <Text style={styles.linkText}>
                Entenda como funciona a política de alimentações subsidiadas para discentes de graduação no RU - IN 02/2023 PROEX.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://ru.unifesspa.edu.br/agendamento-por-telefone.html')}
              style={styles.linkItem}
            >
              <Text style={styles.linkText}>
                O RU (Unidade III, Marabá) irá oferecer a retirada de marmitas com fila própria. Entenda o procedimento de compra, agendamento e retirada da alimentação.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://ru.unifesspa.edu.br/perguntas-frequentes1.html')}
              style={styles.linkItem}
            >
              <Text style={styles.linkText}>Perguntas Frequentes.</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleContact} style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Dúvida ou sugestão? Contate-nos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionSobre}>
          <Text style={styles.title}>SOBRE NÓS</Text>
          <Text style={styles.description}>
            O Restaurante Universitário (RU) da UNIFESSPA, atualmente gerido pela empresa Claras & Cia por meio de um 
            processo licitatório, desempenha um papel essencial na oferta de alimentação acessível e de qualidade para a 
            comunidade acadêmica. O contrato com a Claras & Cia visa garantir o fornecimento de refeições 
            balanceadas, com enfoque na nutrição adequada dos estudantes, docentes e servidores. A parceria é 
            baseada em rigorosos critérios de controle de qualidade, com o objetivo de promover um ambiente saudável 
            e acessível dentro da universidade. Além disso, o RU se destaca pela preocupação em oferecer opções 
            inclusivas para atender a diferentes restrições alimentares, como vegetarianos e intolerantes a glúten.
          </Text>
        </View>
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
  sectionDuvidas: {
    marginBottom: 30,
  },
  sectionSobre: {
    backgroundColor: '#A6C988',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  linksContainer: {
    gap: 25,
  },
  linkItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  contactButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  contactButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
    textAlign: 'justify',
  },
});