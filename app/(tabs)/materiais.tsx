import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const {width, height} = Dimensions.get('window');

export default function Materiais(){
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />
            <View style={styles.input}>
                <Text style={styles.texto}>Conjuntos</Text> 
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>conjuntos numericos</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>funções</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>função afim</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>função quadrátrica</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>função modular</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>função exponencial</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>logaritmo e função logarítmica</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>sequências númericas</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>trigonometria</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>matrizes</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>sistemas lineares</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>geometria plana</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>geometria espacial</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>análise combinatória, probabilide e tratamento da informação</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>matemática financeira</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}>estatística básica</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}> geometria analítica</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}> circunferência </Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.texto}> crônicas </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupa toda a tela
        justifyContent: 'center', // centraliza verticalmente
        alignItems: 'center',     // centraliza horizontalmente
        backgroundColor: '#fff',
        paddingTop: height * 0.0,
        
    },

    imagem: {
        width: width * 0.7,
        height: height * 0.2,
        marginTop: height * 0.9, //modifiquei pra continuar aparecendo 
        
    },

    input: {
        backgroundColor: '#FEADA6',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: height * 0.02,
        justifyContent: "center"
    },

     texto: {
        textAlign: 'center',
        fontSize: 24,
        color: '#000',
        fontWeight:'bold',
    },
   
})