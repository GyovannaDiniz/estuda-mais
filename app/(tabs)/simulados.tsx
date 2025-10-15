import { Button } from '@react-navigation/elements';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';



const {width, height} = Dimensions.get('window');

export default function Login() {
    return(
        <View style={styles.container}> 
             <Image 
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />

            <View style={styles.inputContainer}>
                <Text style={styles.texto}>
                    45 questões de matemática e suas tecnologias
                </Text>
                    <TouchableOpacity style={styles.botao} onPress={() => console.log('clicado')}>
                        <Text style={styles.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>

            </View>
            <View style={styles.inputContainer}>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center',     
        backgroundColor: '#fff',
        paddingTop: 20, 
    },

     imagem: {
        width: width * 0.7,
        height: height * 0.2,
        marginBottom: height * 0.01, 
    },

    inputContainer: {
        width: width * 0.8,
        height: height * 0.2,
        backgroundColor: '#ccc',
        borderRadius: width * 0.03,
        marginTop: height * 0.02,
    },

    texto: {
       
    },

    botao: {
        backgroundColor: '#e2afafff',
        width: width * 0.2,
        height: height * 0.05,
        borderRadius: width * 0.03,
    },

    textoBotao: {
        color: '#fff',
        
    }

});