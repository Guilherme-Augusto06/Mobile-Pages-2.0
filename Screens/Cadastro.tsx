import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../components/input';
import BackgroundColor from '../components/Backgrounds';
import Bottom1 from '../components/bottom';
import Tittle from '../components/tittle';

export default function CadastreSe() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackgroundColor name="Cadastre-se" color="#FF0000" />
      <View style={styles.container2}>  
        <Input name="Nome:" text='Insira seu nome: '/>
        <Input name="Sobrenome:" text='Inisra seu sobrenome: '/>
        <Input name="E-mail:" text='Inisra seu email'/>
        <Input name="Telefone:" text='Inisra seu telefone:'/>
        <Input name="Senha:" text='Inisra sua senha:'/>
        <Input name="Confirmar senha:" text='Inisra sua senha:'/>
        <Bottom1 name="Cadastre-se" color="black"/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    padding: 20,

  },
});