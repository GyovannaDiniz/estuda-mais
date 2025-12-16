import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const { width, height } = Dimensions.get('window');

const SERVER = "https://3dblw8t2-3000.brs.devtunnels.ms/";

export default function adicionarSim() {


    const [enunciado, setEnunciado] = useState("");
    const [altA, setAltA] = useState("");
    const [altB, setAltB] = useState("");
    const [altC, setAltC] = useState("");
    const [altD, setAltD] = useState("");
    const [altE, setAltE] = useState("");
    const [correta, setCorreta] = useState("");


   
    // dropdown do simulado
    const [openSimulado, setOpenSimulado] = useState(false);
    const [selectedSimulado, setSelectedSimulado] = useState(null);


    const [simulados, setSimulados] = useState([]);
    
        useEffect(() => {
            console.log(SERVER)
            const fetchSimulados = async () => {
              const response = await fetch(`${SERVER}api/simulados`);
              const data = await response.json();
              setSimulados(data);
            };
            fetchSimulados();
          }, []);


    return (
        <View style={styles.container}>


            <Image
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />


            <Text style={styles.introducao}>Adicionar Simulado:</Text>


            <ScrollView contentContainerStyle={{ alignItems: "center" }}>


               
                <TouchableOpacity
                    style={styles.dropdown}
                    onPress={() => setOpenSimulado(!openSimulado)}
                >
                    <Text style={styles.dropdownTexto}>
                        {selectedSimulado ? selectedSimulado.title    : "Selecione o Simulado"}
                    </Text>


                    <Ionicons
                        name={openSimulado ? "chevron-up" : "chevron-down"}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>


                {openSimulado && (
                    <View style={styles.dropdownArea}>
                        {simulados.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.item}
                                onPress={() => {
                                    setSelectedSimulado(item);
                                    setOpenSimulado(false);
                                }}
                            >
                                <Text style={styles.checkbox}>
                                    {selectedSimulado === item ? "☑" : "☐"}
                                </Text>
                                <Text style={styles.itemTxt}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}


               
                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Enunciado</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder='Digite o enunciado da questão...'
                        placeholderTextColor="#000"
                        multiline
                        value={enunciado}
                        onChangeText={setEnunciado}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Alternativa A</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite a alternativa A...'
                        placeholderTextColor="#000"
                        value={altA}
                        onChangeText={setAltA}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Alternativa B</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite a alternativa B...'
                        placeholderTextColor="#000"
                        value={altB}
                        onChangeText={setAltB}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Alternativa C</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite a alternativa C...'
                        placeholderTextColor="#000"
                        value={altC}
                        onChangeText={setAltC}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Alternativa D</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite a alternativa D...'
                        placeholderTextColor="#000"
                        value={altD}
                        onChangeText={setAltD}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Alternativa E</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite a alternativa E...'
                        placeholderTextColor="#000"
                        value={altE}
                        onChangeText={setAltE}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Alternativa correta</Text>


                    <View style={styles.opcoesLinha}>
                        {["A", "B", "C", "D", "E"].map(item => (
                            <TouchableOpacity
                                key={item}
                                style={[styles.opcao, correta === item && styles.opcaoSelecionada]}
                                onPress={() => setCorreta(item)}
                            >
                                <Text style={styles.opcaoTxt}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>


            </ScrollView>


            <Link href="/" asChild>
                <TouchableOpacity style={styles.botao}>
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

