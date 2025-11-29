import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { router } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get('window');

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function loginGoogle() {
    console.log("Fazendo login com o google!")
  }

  async function loginEmailSenha() {
    if (!email || !senha) {
      return Alert.alert("Erro", "Preencha email e senha.");
    }

    console.log("Acabei de fazer login com o email e senha!");
    setLoading(true);

    try {

      const resp = await fetch("http://192.168.1.22:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      const dados = await resp.json();

      if (!resp.ok) {
        setLoading(false);
        return Alert.alert("Erro", dados.error || "Erro no login");
      }

      // salva usuário
      await AsyncStorage.setItem("@user", JSON.stringify(dados.usuario));

      setLoading(false);
 
      router.push("/inicio");

    } catch (error) {
      setLoading(false);
      Alert.alert("Erro", "Falha ao conectar ao servidor.");
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.circulo}>
        <Text style={Styles.titulo}>Entrar</Text>

        <View style={Styles.campoComIcone}>
          <Image
            source={require('@/assets/images/e-mail.png')}
            style={Styles.iconeDentro}
          />
          <TextInput
            style={Styles.inputComIcone}
            placeholder="Email"
            placeholderTextColor={'#ccc'}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={Styles.campoComIcone}>
          <Image
            source={require('@/assets/images/cadeado.png')}
            style={Styles.iconeDentro}
          />
          <TextInput
            style={Styles.inputComIcone}
            placeholder="Senha"
            placeholderTextColor={'#ccc'}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>
      </View>

      <TouchableOpacity style={Styles.botao} onPress={loginEmailSenha}>
        <Text style={Styles.texto}>{loading ? "Entrando..." : "Entrar"}</Text>
      </TouchableOpacity>

      <View style={Styles.linhaComTexto}>
        <View style={Styles.linha} />
        <Text style={Styles.ou}>OU</Text>
        <View style={Styles.linha} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.6,
  },

  circulo: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height * 0.60,
    backgroundColor: '#FEADA6',
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: height * 0.1,
  },

  titulo: {
    textAlign: 'center',
    color: '#000',
    fontSize: width * 0.06,
    marginBottom: height * 0.02,
    marginVertical: height * 0.07,
    fontWeight: 'bold',
  },

  campoComIcone: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFB',
    borderColor: '#C1C1C1',
    borderWidth: width * 0.001,
    borderRadius: width * 0.03,
    height: height * 0.06,
    width: width * 0.6,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.03,
  },

  iconeDentro: {
    width: width * 0.05,
    height: height * 0.03,
    marginRight: 10,
  },

  inputComIcone: {
    flex: 1,
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#FEADA6',
    padding: 10,
    borderRadius: height * 0.02,
    borderWidth: width * 0.001,
    borderColor: '#C1C1C1',
    alignItems: 'center',
    width: width * 0.5,
    height: height * 0.06,
    marginTop: height * 0.03,
  },

  texto: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  linhaComTexto: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },

  linha: {
    height: height * 0.002,
    width: width * 0.2,
    backgroundColor: '#000',
  },

  ou: {
    marginHorizontal: width * 0.02,
    fontSize: 14,
    color: '#000',
  },
});
