import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';


function NavbarCadastro ({color, colorText,icons,text}) { 
    const styles = StyleSheet.create({
        container: {
            marginTop: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            zIndex: 1,
            backgroundColor: color,
            borderColor: '#595959',
            borderBottomWidth: 1,
            color: colorText,
            
        },
        Text: {
            color: colorText,
        }
    });
    
    return (
    
    <View style={styles.container}>
        <TouchableOpacity>
            {icons.icon1}
        </TouchableOpacity>
        <Text style={styles.Text}>{text}</Text>
        <TouchableOpacity>
            {icons.icon2}
        </TouchableOpacity>
    </View>
    );
};


export default NavbarCadastro;

