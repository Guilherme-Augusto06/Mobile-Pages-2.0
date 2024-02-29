import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../components/input';
import BackgroundColor from '../components/Backgrounds';
import Bottom1 from '../components/bottom';
import Tittle from '../components/tittle';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import ButtonPlus from '../components/buttom1';

export default function Teste() {
  return (
  

    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar color="#FFFFFF"/>
      <Footer color='#FF0000'/>
       
      <ButtonPlus/>

    </View>     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
