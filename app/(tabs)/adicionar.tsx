import React, {useState} from 'react';
import { Dimensions, StyleSheet,Image, Text, TextInput, View } from 'react-native';

const {width, height } = Dimensions.get('window');



export default function Login() {

    return(
        <View style={styles.container}> 
            <Image 
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />

          <Text style={styles.introducao}> Adicionar Vídeos aulas: </Text>
            <Text style={styles.titulo}> Nome </Text>
            <TextInput 
                style={styles.campo}
                placeholderTextColor={'#000'}
                placeholder='------'    
            />

            <Text style={styles.titulo}> Link </Text>
            <TextInput
                style={styles.campo}
                placeholderTextColor={'#000'}
                placeholder='------'
            />

        </View>
    );

}

const styles = StyleSheet.create ({

    container:{
         flex: 1, // ocupa toda a tela
        justifyContent: 'flex-start', // centraliza verticalmente
        alignItems: 'center',     // centraliza horizontalmente
        backgroundColor: '#fff',
    },

    imagem: {
        width:width * 0.7,
        height: height * 0.2 
    },

    introducao: {
        justifyContent:'flex-start',
        fontSize: 15,
        color: '#000',
    },

    titulo: {

    },


    campo: {
        flexDirection: 'row',
        backgroundColor: '#FEADA6',
        borderRadius: width * 0.2,
        height: height * 0.08,
        width: width * 0.8,
        marginTop: height * 0.05,
         textAlign: 'center',
        paddingRight: 15,
        
    }

 })