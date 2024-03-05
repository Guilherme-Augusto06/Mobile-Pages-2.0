import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';


import NavBar from '../components/navbar';
import Footer from '../components/footer';
import ButtonPlus from '../components/buttom1';
import Objetos from '../components/objetos';

export default function Teste() {
  return (
  

    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar color="#FFFFFF"/>
      <ScrollView>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>

      </ScrollView>

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

