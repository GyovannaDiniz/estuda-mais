import React, { useState, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function adicionar() {
    const [openTipo, setOpenTipo] = useState(false);
    const [openConteudo, setOpenConteudo] = useState(false);

    const [selectedTipo, setSelectedTipo] = useState(null); 
    const [selectedConteudo, setSelectedConteudo] = useState(null);

    const [conteudos, setConteudos] = useState([]);

    const [nome, setNome] = useState("");
    const [link, setLink] = useState("");


    useEffect(() => {
        async function carregarConteudos() {
            try {
                const resp = await fetch("https://silver-barnacle-x5p6qv5rvx9gh6449-3000.app.github.dev/api/conteudo");
                const data = await resp.json();
                setConteudos(data);
            } catch (e) {
                console.log("Erro carregando conteúdos:", e);
            }
        }
        carregarConteudos();
    }, []);

    async function salvarMaterial() {
        if (!selectedTipo || !selectedConteudo || nome.trim() === "" || link.trim() === "") {
            alert("Preencha tudo!");
            return;
        }

        try {
            const response = await fetch(
                "https://silver-barnacle-x5p6qv5rvx9gh6449-3000.app.github.dev/api/material",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        tipo: selectedTipo,
                        nome,
                        link,
                        conteudo_id: selectedConteudo
                    })
                }
            );

            const data = await response.json();
            console.log("Salvo:", data);

            alert("Material salvo com sucesso!");
            router.replace("/materiais");
        } catch (e) {
            alert("Erro ao salvar.");
            console.log(e);
        }
    }

    return (
        <View style={styles.container}> 
            <Image 
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />

            <Text style={styles.introducao}>Adicionar Material:</Text>

            <ScrollView>

                    // dropdown tipo //
                <TouchableOpacity 
                    style={styles.dropdown}
                    onPress={() => setOpenTipo(!openTipo)}
                >
                    <Text style={styles.dropdownTexto}>
                        {selectedTipo ? selectedTipo : "Tipo"}
                    </Text>
                    <Ionicons name={openTipo ? "chevron-up" : "chevron-down"} size={24} color="#000" />
                </TouchableOpacity>

                {openTipo && (
                    <View style={styles.dropdownArea}>
                        <TouchableOpacity 
                            style={styles.item}
                            onPress={() => { setSelectedTipo("videos"); setOpenTipo(false); }}
                        >
                            <Text style={styles.checkbox}>{selectedTipo === "videos" ? "☑" : "☐"}</Text>
                            <Text style={styles.itemTxt}>Vídeos Aulas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.item}
                            onPress={() => { setSelectedTipo("lista"); setOpenTipo(false); }}
                        >
                            <Text style={styles.checkbox}>{selectedTipo === "lista" ? "☑" : "☐"}</Text>
                            <Text style={styles.itemTxt}>Lista de exercícios</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.item}
                            onPress={() => { setSelectedTipo("resumo"); setOpenTipo(false); }}
                        >
                            <Text style={styles.checkbox}>{selectedTipo === "resumo" ? "☑" : "☐"}</Text>
                            <Text style={styles.itemTxt}>Resumos</Text>
                        </TouchableOpacity>
                    </View>
                )}
                 // dropdown conteudo //
                <TouchableOpacity 
                    style={styles.dropdown}
                    onPress={() => setOpenConteudo(!openConteudo)}
                >
                    <Text style={styles.dropdownTexto}>
                        {selectedConteudo 
                            ? conteudos.find(c => c.id === selectedConteudo)?.nome 
                            : "Conteúdo"}
                    </Text>
                    <Ionicons name={openConteudo ? "chevron-up" : "chevron-down"} size={24} color="#000" />
                </TouchableOpacity>

                {openConteudo && (
                    <View style={styles.dropdownArea}>
                        {conteudos.map((c) => (
                            <TouchableOpacity 
                                key={c.id}
                                style={styles.item}
                                onPress={() => { setSelectedConteudo(c.id); setOpenConteudo(false); }}
                            >
                                <Text style={styles.checkbox}>{selectedConteudo === c.id ? "☑" : "☐"}</Text>
                                <Text style={styles.itemTxt}>{c.nome}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

               
                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Nome</Text>
                    <TextInput 
                        style={styles.campo}
                        placeholderTextColor={'#000'}
                        placeholder='----------'
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

            
                <View style={styles.inputContainer}>
                    <Text style={styles.titulo}>Link</Text>
                    <TextInput
                        style={styles.campo}
                        placeholderTextColor={'#000'}
                        placeholder='----------'
                        value={link}
                        onChangeText={setLink}
                    />
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.botao} onPress={salvarMaterial}>
                <Text style={styles.botaoTxt}>salvar</Text>
            </TouchableOpacity>
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
    dropdown: {
        width: width * 0.8,
        backgroundColor: '#F9A9A3',
        padding: 15,
        borderRadius: width * 0.04,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: width * 0.002,
        marginBottom: 2
    },
    dropdownTexto: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600'
    },
    dropdownArea: {
        width: width * 0.8,
        backgroundColor: '#F9C9C5',
        padding: 15,
        borderRadius: width * 0.04,
        borderWidth: width * 0.002,
        marginTop: 1,
        marginBottom: 10
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    checkbox: {
        fontSize: 18,
        marginRight: 10
    },
    itemTxt: {
        fontSize: 16,
        color: '#000'
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
    campo: {
        backgroundColor: '#F9A9A3',
        borderRadius: width * 0.04,
        height: height * 0.08,
        width: width * 0.8,
        textAlign: 'center',
        fontSize: 16,
        borderWidth: width * 0.002,
        borderColor: '#000'
    },
    botao: {
        backgroundColor: '#F9A9A3',
        paddingVertical: height * 0.014,
        paddingHorizontal: width * 0.06,
        borderRadius: width * 0.04,
        borderWidth: width * 0.002,
        borderColor: '#000',
        marginTop: 20
    },
    botaoTxt: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});
