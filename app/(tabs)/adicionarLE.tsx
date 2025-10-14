import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Login() {
    return (
        <View style={styles.container}> 
            <Image 
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />

            <Text style={styles.introducao}>Adicionar Lista de exercicio:</Text>

           
            <View style={styles.inputContainer}>
                <Text style={styles.titulo}>Nome</Text>
                <TextInput 
                    style={styles.campo}
                    placeholderTextColor={'#FEDBD8'}
                    placeholder='------'    
                />
            </View>

            
            <View style={styles.inputContainer}>
                <Text style={styles.titulo}>Link</Text>
                <TextInput
                    style={styles.campo}
                    placeholderTextColor={'#FEDBD8'}
                    placeholder='------'
                />
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
        marginBottom: height * 0.05, 
    },

    introducao: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: height * 0.03, 
        paddingRight: width * 0.2,
    },
    inputContainer: {
        width: width * 0.8,
        marginBottom: height * 0.02, 
    },

    titulo: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
    },

    campo: {
        backgroundColor: '#FEADA6',
        borderRadius: width * 0.03,
        height: height * 0.08,
        width: '100%',
        textAlign: 'center',
        fontSize: 16, 
    }
});
