import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Link } from 'expo-router';

const {width, height} = Dimensions.get('window');

export default function inicio() {

    const materiaisClick = (e: GestureResponderEvent) => {
        console.log("tocou em materiais");
    };

    const simuladosClick = (e: GestureResponderEvent) => {
            console.log("tocou em simulados");
        };
  
    return(
        <View style={styles.container}>
            <Image
            source={require('@/assets/images/logoEstuda.png')}
            style={[styles.imagem, { resizeMode: 'contain' }]}
            />

                <Link href="/materiais" asChild>
                    <TouchableOpacity style={styles.campoComIcone} onPress={materiaisClick}>
                        <Text style={styles.texto}>Materiais</Text>
                            <Image 
                                source={require('@/assets/images/material.png')}
                                style={styles.iconeDentro}
                            />
                    </TouchableOpacity>
                </Link>

                <Link href="/simulados" asChild>
                    <TouchableOpacity style={styles.campoComIcone} onPress={simuladosClick}>
                        <Text style={styles.texto}>Simulados</Text>
                            <Image
                                source={require('@/assets/images/simulados.png')}
                                style={styles.iconeDentro}
                            />
                    </TouchableOpacity>
                </Link>
        </View>
    );
  
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,                   // usa toda altura da tela
        justifyContent: 'flex-start',  // centraliza verticalmente
        alignItems: 'center',      // centraliza horizontalmente
        backgroundColor: '#fff',
        paddingTop: height * 0.08,

    },

    imagem: {
        width: width * 0.8,
        height: height * 0.25,           
        marginBottom: height * 0.01,
    },


    campoComIcone: {
        flexDirection: 'row', //// o Ícone e o input ficam lado a lado
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#FEADA6',
        borderWidth: width * 0.004, //tamanho da borda dentro
        borderRadius: width * 0.03,
        height: height * 0.2,
        width: width * 0.8, //0.6
        paddingHorizontal: width * 0.1,
        marginBottom: height * 0.06,
        
        
        
        
    },

    iconeDentro: {
        width: width * 0.3,
        height: height * 0.15,
        marginRight: 1,
        marginHorizontal: width * 0.1,
    },

    texto: {
        fontSize: 24,
        color: '#000',
        fontWeight:'bold',
    },
   

})