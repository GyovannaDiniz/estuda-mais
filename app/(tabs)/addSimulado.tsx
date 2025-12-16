import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const { width, height } = Dimensions.get('window');


export default function adicionarSim() {


    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");


    async function handleAddSimulado() {
            try {
                const resp = await fetch("https://3dblw8t2-3000.brs.devtunnels.ms/api/simulados",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            titulo,
                            descricao,
                        })
                    });
            
              
    
                let respostaJSON = {};
                const respostaBruta = await resp.text();

                try {
                    respostaJSON = JSON.parse(respostaBruta);
                } catch (error) {
                    console.log("Erro ao converter pra JSON:", error);
                }
            } catch (e) {
                console.log("Erro: "+e);
            }
        }
        
    return (
        <View style={styles.container}>

            <Image
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />


            <Text style={styles.introducao}>Adicionar Simulado:</Text>


            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
              
                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Título</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite o título do simulado...'
                        placeholderTextColor="#000"
                        value={titulo}
                        onChangeText={setTitulo}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Descrição</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder='Digite a descrição...'
                        placeholderTextColor="#000"
                        multiline
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                </View>

            </ScrollView>


            <Link href="/" asChild>
                <TouchableOpacity style={styles.botao} onPress={handleAddSimulado}>
                    <Text style={styles.botaoTxt}>salvar</Text>
                </TouchableOpacity>
            </Link>


        </View>
    );
}




const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F4F8FA',
        paddingTop: 20
    },


    imagem: {
        width: width * 0.55,
        height: height * 0.13,
        marginBottom: height * 0.05
    },


    introducao: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: height * 0.03,
        paddingRight: width * 0.3
    },


    inputContainer: {
        width: width * 0.8,
        marginBottom: 15
    },


    titulo: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5
    },


    textArea: {
        backgroundColor: '#F9A9A3',
        borderRadius: width * 0.04,
        height: height * 0.20,
        width: width * 0.8,
        padding: 10,
        fontSize: 16,
        borderWidth: width * 0.002,
        borderColor: '#000',
        textAlignVertical: "top",
    },


    input: {
        backgroundColor: '#F9A9A3',
        borderRadius: width * 0.04,
        height: height * 0.07,
        width: width * 0.8,
        padding: 10,
        fontSize: 16,
        borderWidth: width * 0.002,
        borderColor: '#000',
    },


    
    dropdown: {
        width: width * 0.8,
        height: height * 0.07,
        backgroundColor: "#F9A9A3",
        borderRadius: width * 0.04,
        borderWidth: 1,
        borderColor: "#000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 15
    },


    dropdownTexto: {
        fontSize: 16,
        color: "#000"
    },


    dropdownArea: {
        width: width * 0.8,
        backgroundColor: "#F9A9A3",
        borderRadius: width * 0.04,
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 5,
        marginBottom: 15
    },


    item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10
    },


    itemTxt: {
        fontSize: 16,
        color: "#000",
        marginLeft: 10
    },


    checkbox: { fontSize: 20 },


    
    opcoesLinha: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width * 0.8,
        marginTop: 5
    },


    opcao: {
        width: 50,
        height: 50,
        backgroundColor: "#F9A9A3",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
    },


    opcaoSelecionada: {
        backgroundColor: "#FF7F73",
        borderWidth: 2
    },


    opcaoTxt: {
        fontSize: 18,
        fontWeight: "bold"
    },


    botao: {
        backgroundColor: '#F9A9A3',
        paddingVertical: height * 0.014,
        paddingHorizontal: width * 0.06,
        borderRadius: width * 0.04,
        borderWidth: width * 0.002,
        borderColor: '#000',
        marginTop: 10,
        marginBottom: 20
    },


    botaoTxt: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

