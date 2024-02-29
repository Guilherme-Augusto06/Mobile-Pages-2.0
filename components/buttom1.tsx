import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';




function ButtonPlus ({}) { 
    const styles = StyleSheet.create({
        container: {    
            flex: 1,
        },
    });
    
    return ( 
        <View style={styles.container}>
            <TouchableOpacity style={btnAdd.btnAdd}>
                <Entypo name="circle-with-plus" size={50} color="red" />
            </TouchableOpacity>
        </View>
    );
}

const btnAdd = StyleSheet.create({
    btnAdd: {
        position: 'absolute',
        bottom: 100,
        right: 20,
    },
});
export default ButtonPlus;

