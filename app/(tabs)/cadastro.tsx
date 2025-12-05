import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { router } from "expo-router";

const { width, height } = Dimensions.get('window');

export default function cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleRegister() {
        if (!nome || !email || !senha) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }

        try {
            const resp = await fetch("https://silver-barnacle-x5p6qv5rvx9gh6449-3000.app.github.dev/api/autenticacao/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        nome,
                        email,
                        senha,
                        role: "aluno"
                       
                    })
                }
            );

            const respostaBruta = await resp.text();
            console.log("Status da resposta:", resp.status);
            console.log("Resposta do servidor (texto bruto):", respostaBruta);

            let respostaJSON = {};
            try {
                respostaJSON = JSON.parse(respostaBruta);
            } catch (e) {
                console.log("Erro ao converter pra JSON:", e);
            }

            if (!resp.ok) {
                if (resp.status === 409) {
                    Alert.alert("Atenção", "E-mail já cadastrado!");
                    return;
                }
                Alert.alert("Erro", respostaJSON.error|| respostaJSON.message || "Erro ao cadastrar.");
                return;
            }

            Alert.alert("Sucesso", "Cadastro realizado!");
            router.replace("/inicio");

        } catch (error) {
            console.log("Erro no fetch:", error);
            Alert.alert("Erro", "Não foi possível conectar ao servidor.");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.circulo}>
                <Text style={styles.titulo}>Cadastre-se</Text>

                <View style={styles.campoComIcone}>
                    <Image
                        source={require('@/assets/images/userNome.png')}
                        style={styles.iconeDentro}
                    />
                    <TextInput
                        style={styles.inputComIcone}
                        placeholderTextColor={'#ccc'}
                        placeholder='Nome'
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <View style={styles.campoComIcone}>
                    <Image
                        source={require('@/assets/images/e-mail.png')}
                        style={styles.iconeDentro}
                    />
                    <TextInput
                        style={styles.inputComIcone}
                        placeholderTextColor={'#ccc'}
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.campoComIcone}>
                    <Image
                        source={require('@/assets/images/cadeado.png')}
                        style={styles.iconeDentro}
                    />
                    <TextInput
                        style={styles.inputComIcone}
                        placeholderTextColor={'#ccc'}
                        placeholder='Senha'
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>

                <TouchableOpacity style={styles.botao} onPress={handleRegister}>
                    <Text style={styles.texto}>Cadastre-se</Text>
                </TouchableOpacity>

                <View style={styles.linhaComTexto}>
                    <View style={styles.linha}/>
                    <Text style={styles.ou}>OU</Text>
                    <View style={styles.linha}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: width * 0.20,
    },

    circulo: {
        width: width * 0.99,
        height: height * 0.99,
        backgroundColor: '#FEADA6',
        borderRadius: (width * 0.99) / 2,
        marginTop: height * 0.40,
        padding: width * 0.20,
    },

    titulo: {
        textAlign:'center',
        fontSize: width * 0.05,
        marginBottom: height * 0.02,
        fontWeight:'bold',
    },

    botao: {
        backgroundColor:'#FAD0C4',
        padding: 10,
        borderRadius:  height * 0.02,
        borderWidth: width * 0.001,
        borderColor:'#C1C1C1',
        marginHorizontal: width * 0.05,
        alignItems: 'center',
        width: width * 0.50,
    },

    texto: {
        color:'#000',
        fontSize: 16,
        fontWeight:'bold',
    },

    linhaComTexto: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: height * 0.02,
        marginHorizontal: width * 0.06,
    },

    linha: {
      height: height * 0.002,
      width: width * 0.2,
      backgroundColor: '#000',
      marginVertical: height * 0.02,
    },

    ou: {
        marginHorizontal: width * 0.02,
        fontSize: 14,
        color: '#000',
    },

    campoComIcone: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7FAFB',
        borderRadius: width * 0.03,
        height: height * 0.06,
        paddingHorizontal: width * 0.04,
        marginBottom: height * 0.02,
    },

    iconeDentro: {
        width: width * 0.05,
        height:  height * 0.03,
        marginRight: 10,
    },

    inputComIcone: {
        flex: 1,
        fontSize: 16,
    },
});
