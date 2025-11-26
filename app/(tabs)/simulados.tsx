import React from 'react';
import { Dimensions, Image, StyleSheet, ScrollView, Text, TouchableOpacity, View, GestureResponderEvent } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function simulados() {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />
            <View style={styles.caixaAdd}>
                <Image 
                    source={require('@/assets/images/mais.png')}
                    style={styles.imagemAdd}
                />
                <Text style={styles.textoAdd}>Add</Text>

            </View>

            <ScrollView>
                <View style={styles.inputContainer}>
                    <View style={styles.linhaTitulo}>
                        <Image
                            source={require('@/assets/images/grafico-simulados.png')}
                            style={styles.imagemSimulado}
                        />
                        <Text style={styles.tituloSimulado}>ENEM</Text>
                    </View>
                    <Text style={styles.texto}>
                        45 questões de matemática e suas tecnologias
                    </Text>
                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => console.log('iniciar clicado')}>
                            <Text style={styles.textoBotao}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                
                <View style={styles.inputContainer} >
                    <View style={styles.linhaTitulo}>
                        <Image
                            source={require('@/assets/images/grafico-simulados.png')}
                            style={styles.imagemSimulado}
                        />
                        <Text style={styles.tituloSimulado}>ENEM</Text>
                    </View>
            
                    <Text style={styles.texto}>
                        45 questões de matemática e suas tecnologias
                    </Text>

                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => console.log('iniciar clicado')}>
                            <Text style={styles.textoBotao}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.linhaTitulo}>
                        <Image
                            source={require('@/assets/images/grafico-simulados.png')}
                            style={styles.imagemSimulado}
                        />
                        <Text style={styles.tituloSimulado}>ENEM</Text>
                    </View>

                    <Text style={styles.texto}>
                        45 questões de matemática e suas tecnologias
                    </Text>

                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => console.log('iniciar clicado')}>
                            <Text style={styles.textoBotao}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: '#FEADA6',
        borderRadius: width * 0.03,
        marginTop: height * 0.02,
        padding: height * 0.02,
    },

    imagemSimulado: {
        width: width * 0.1,
        height: height * 0.06,
        marginBottom: 10,
    },

    texto: {
        color: '#000',
        fontSize: 16,
        marginBottom: 1,
    },

    areaBotao: {
        width: width * 0.7,
        alignItems: 'flex-end', // botão à direita
    },

    botao: {
        backgroundColor: '#FEDBD8',
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        borderRadius: width * 0.03,
    },

    textoBotao: {
        color: '#000',
        fontWeight: '600',
    },

    tituloSimulado: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,        
    
    },

    linhaTitulo: {
        flexDirection: 'row',   
        alignItems: 'center',   
        marginBottom: 10,
    },

    caixaAdd: {
        width: width * 0.2,
        backgroundColor: '#F9A9A3', 
        borderRadius: width * 0.03,
        flexDirection: 'row',      
        alignItems: 'center',
        justifyContent: 'center',
        left: width * 0.3,
        paddingVertical: height * 0.01,
        marginVertical: height * 0.01, 
    },

    imagemAdd: {
        width: width * 0.03,
        height: width * 0.03,
        marginRight: 10,             
},

    textoAdd: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    }

});
