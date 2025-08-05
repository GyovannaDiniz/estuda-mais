import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const {width, height} = Dimensions.get('window');

export default function Materiais(){
    return(
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />
        <View style={styles.input}>
            <Text style={styles.texto}>Conjuntos</Text>
        </View>
        <View style={styles.input}>
            <Text style={styles.texto}>Funções</Text>
        </View>
        <View style={styles.input}>
            <Text style={styles.texto}>Sequência</Text>
        </View>
        <View style={styles.input}>
            <Text style={styles.texto}>Matemática Basica</Text>
        </View>
        <View style={styles.input}>
            <Text style={styles.texto}>Trigonometria</Text>
        </View>
        <View style={styles.input}>
            <Text style={styles.texto}>Álgebra linear</Text>
        </View>
        <View style={styles.input}>
            <Text style={styles.texto}>Razão e Proporção</Text>
        </View>
        <View style={styles.input}>
            <Text style={styles.texto}>Modelagem Algébrica</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupa toda a tela
        justifyContent: 'center', // centraliza verticalmente
        alignItems: 'center',     // centraliza horizontalmente
        backgroundColor: '#fff',
        paddingTop: height * 0.08,
        
    },

    imagem: {
        width: width * 0.8,
        height: height * 0.2,           
        marginBottom: height * 0.1,
    },

    input: {
        backgroundColor: '#ccc',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: height * 0.02,
        
    },

     texto: {
        textAlign: 'center',
        fontSize: 24,
        color: '#000',
        fontWeight:'bold',
    },
   
})