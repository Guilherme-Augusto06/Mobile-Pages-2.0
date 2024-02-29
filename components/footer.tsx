import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function Footer ({color}) { 
    const styles = StyleSheet.create({
        container: {    
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 20,
            backgroundColor: color,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            gap: 24,
        },
    });
    
    return (
    
    <View style={styles.container}>
        <TouchableOpacity>
            <MaterialIcons name="flip-camera-ios" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
            <FontAwesome name="list-ol" size={30} color="white" />
        </TouchableOpacity>
    </View>
    );
};


export default Footer;

