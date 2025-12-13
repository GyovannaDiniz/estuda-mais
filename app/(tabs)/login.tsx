import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
//import { GoogleSignin } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get('window');

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);

  // Validação de e-mail com @ e .com
  const validarEmail = (text: string) => {
    setEmail(text);
    const emailValido = /\S+@\S+\.\S+/.test(text);
    setEmailError(emailValido ? "" : "Email inválido (ex: usuario@gmail.com)");
  };

  async function loginGoogle() {
    console.log("Fazendo login com o google!")
    /*
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      await AsyncStorage.setItem("@user", JSON.stringify(userInfo.user));

      navigation.replace("UserScreen");

    } catch (e) {
      console.log(e);
      Alert.alert("Erro", "Não foi possível entrar com o Google.");
    }
      */
  }
  async function loginEmailSenha() {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha email e senha.");
      return;
    }

    if (emailError) {
      Alert.alert("Erro", "Corrija o e-mail antes de continuar.");
      return;
    }

    setLoading(true);

    try {
      const resp = await fetch("https://3dblw8t2-3000.brs.devtunnels.ms/api/autenticacao/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), senha: senha.trim() })
      });


      const raw = await resp.text(); // peguei o raw para debugar
      console.log("RAW RESPONSE:", raw);

      let dados;
      try {
        dados = JSON.parse(raw);
      } catch (e) {
        console.log("Erro ao parsear JSON:", e);
        Alert.alert("Erro", "Resposta inválida do servidor.");
        return;
      }

      console.log("STATUS:", resp.status);
      console.log("DADOS:", dados);

      if (!resp.ok) {
        Alert.alert("Erro", dados.error || "Erro ao fazer login");
        return;
      }


      const usuarioEncontrado = dados; // a api retorna um objeto

      await AsyncStorage.setItem("@user", JSON.stringify(usuarioEncontrado));
      console.log("Usuário salvo:", usuarioEncontrado);

      router.replace("/inicio");

    } catch (error) {
      console.log("ERRO:", error);
      Alert.alert("Erro", "Falha ao conectar ao servidor.");
    } finally {
      setLoading(false);
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
            onChangeText={validarEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        {emailError ? <Text style={Styles.errorText}>{emailError}</Text> : null}

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

      <TouchableOpacity style={Styles.botao} onPress={loginEmailSenha} disabled={loading}>
        <Text style={Styles.texto}>{loading ? "Entrando..." : "Entrar"}</Text>
      </TouchableOpacity>

      <View style={Styles.linhaComTexto}>
        <View style={Styles.linha} />
        <Text style={Styles.ou}>OU</Text>
        <View style={Styles.linha} />
      </View>

      <Image
        source={require('@/assets/images/google.png')}
        style={Styles.iconeGoogle}
      />


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

  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
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

  iconeGoogle: {
    width: width * 0.07,
    height: height * 0.04,

  }
});
