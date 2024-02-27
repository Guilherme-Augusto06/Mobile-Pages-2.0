import { View, Text, TextInput, StyleSheet } from 'react-native';




function Input ({text, name}) {
    return (
        <View>
            <Text >{name}</Text>
            
            <TextInput placeholder={text} style={styles.input} />
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        marginTop: 39,
    },
    input: {
        padding: 10,
        backgroundColor: '#F5F5F5',
        borderBottomColor: 'gray',
        marginBottom: 27,
        height: 40,
        marginTop: 9,

        
    },


});
export default Input;