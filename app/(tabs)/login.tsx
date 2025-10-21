import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from 'expo-router';
const {width, height } = Dimensions.get('window');

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return(
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
          placeholderTextColor={'#ccc'}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
      />
        </View>
      </View>

      <Link href="/inicio" asChild>
        <TouchableOpacity style={Styles.botao} onPress={() => console.log('clicado')}>
              <Text style={Styles.texto}>Entrar</Text>
        </TouchableOpacity>
      </Link>

          <View style={Styles.linhaComTexto}>
            <View style={Styles.linha} />
            <Text style={Styles.ou}>OU</Text>
            <View style={Styles.linha} />
          </View>
    </View>
    
  );
}

const Styles = StyleSheet.create ({
    container: {
      flex: 1,
      alignItems: 'center',      // centraliza horizontalmente
      backgroundColor: '#fff',
      paddingHorizontal: width * 0.05,
      paddingTop: height * 0.6,
 //espaçamento geral da parte interna
    
    },

    circulo: {
      position: 'absolute', //posição absoluta
      top: 0, //
      width: width, 
      height: height * 0.60,
      backgroundColor:'#FEADA6',
      borderBottomLeftRadius: width, //arredondou a borda na parte esquerda
      borderBottomRightRadius: width, // arredondou a borda na parte direita
      alignItems:'center', 
      justifyContent: 'center', 
      paddingTop: height * 0.1, //epaço interno superior 
    },


    titulo: {
      textAlign:'center',
      color:'#000', 
      fontSize: width * 0.06, //tam da fonte
      marginBottom: height * 0.02, //espaço abaixo de cada campo
      marginVertical: height * 0.07, //margem vertical
      fontWeight:'bold',
    },

    campoComTexto: {
      color: '#000'
    },

    campoComIcone: {
      flexDirection: 'row', //// o Ícone e o input ficam lado a lado
      alignItems: 'center',
      backgroundColor: '#F7FAFB',
      borderColor: '#C1C1C1', //cor da borda
      borderWidth: width * 0.001, //tamanho da borda dentro
      borderRadius: width * 0.03,
      height: height * 0.06,
      width: width * 0.6, //0.6
      paddingHorizontal: width * 0.04,
      marginBottom: height * 0.03,
    },

    iconeDentro: {
      width: width * 0.05,
      height:  height * 0.03,
      marginRight: 10,
      fontWeight:'bold',
    },

    inputComIcone: {
      flex: 1,
      fontSize: 16,
    },

    botao: {
      backgroundColor:'#FEADA6',
      padding: 10,
      borderRadius:  height * 0.02,
      borderWidth: width * 0.001,
      borderColor:'#C1C1C1',
      marginHorizontal: width * 0.05,
      alignItems: 'center',
      width: width * 0.5,
      height: height * 0.06,
      marginTop: height * 0.03, //posição do botao      
    },

    texto: {
      color:'#000',
      fontSize: 16,
      fontWeight:'bold',
    },

    linhaComTexto: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: height * 0.02, //// espacinho acima e abaixo da linha com "OU"
     
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

})
