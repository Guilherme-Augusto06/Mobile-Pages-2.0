
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

type TextBoxWithTitleProps = {
    title: string;
    text: string;
    security: boolean;
}

const TextBoxWithTitle = ({ title, text, security }: TextBoxWithTitleProps) => {
    const [hovered, setHovered] = useState("#F39200");
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.textBox}>
        <TextInput placeholder={text}
                style={[styles.input, { borderColor: hovered }]}
                onFocus={() => {
                    setHovered("#F39200");
                }}
                onBlur={() => {
                    setHovered("#F5F5F5");
                }}
                secureTextEntry={security}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  titleContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    position: 'absolute',
    top: -10,
    left: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textBox: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

});


export default TextBoxWithTitle;
