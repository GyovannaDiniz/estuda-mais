import Accordion from "@/components/Accordion";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const {width, height} = Dimensions.get('window');

export default function Materiais(){
const [materiais, setMateriais] = useState([]);
const [tipo, setTipo] = useState([]);
const [conteudo, setConteudo] = useState([]);

  useEffect(() => {
    const fetchMateriais = async () => {
      const response = await fetch('https://hmrq0gr4-3000.devtunnels.ms/api/material');
      const data = await response.json();
      setMateriais(data);
    }

    const fetchTipo = async () => {
      const response = await fetch('https://hmrq0gr4-3000.devtunnels.ms/api/tipo');
      const data = await response.json();
      setTipo(data);
    }

    const fetchConteudo = async () => {
      const response = await fetch('https://hmrq0gr4-3000.devtunnels.ms/api/conteudo');
      const data = await response.json();
      setConteudo(data);
    }

    fetchConteudo();
    fetchTipo();
    fetchMateriais();
  }, [])


    


    const conteudosAccordion = materiais.map((item, index) => 
        <Accordion key={item.id} estilo={styles.textoAccordionInterno} titulo={item.link} corTexto='#002AFF' iconeRemover />
    );
        
    const accordions = tipo.map(item =>
        <Accordion key={item.id} estilo={styles.elementoAccordionInterno} iconeNaoAtivo titulo={item.nome} itens={conteudosAccordion} iconeAdicionar />
    );
    const conteudos = ["Conteúdo 1", "Conteúdo 2", "Conteúdo 3"]
    const conteudosText = conteudo.map((item, index) => <Text style={styles.elementoAccordion}>{item}</Text>)

    return(
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />
            <ScrollView>
                <View style={styles.mainContent}>
                    <View style={styles.listaConteudos}>
                        {conteudo.map((item, index) => (
                            <Accordion
                                key={item.id}
                                estilo={styles.elementoAccordion}
                                titulo={item.nome}
                                textStyle={styles.textoTituloAccordion}
                                itens={accordions}
                                
                            />
                        
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // ocupa toda a tela
        justifyContent: 'flex-start', // centraliza verticalmente
        alignItems: 'center',     // centraliza horizontalmente
        backgroundColor: '#fff',
    },

    imagem: {
        width: width * 0.7,
        height: height * 0.2,
    },

    elementoAccordion: {
        flexDirection: 'row',
        backgroundColor: '#FEADA6',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: height * 0.02,
        justifyContent: "center",  
        paddingRight: 15,
        alignItems: 'center', 
        
    },
    elementoAccordionInterno: {
        flexDirection: 'row',
        backgroundColor: '#FEDBD8',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: height * 0.001,
        justifyContent: "center",  
        paddingRight: 25,
        alignItems: 'center', 
        paddingLeft: width * 0.02, 
    },
    textoAccordionInterno: {
        flexDirection: 'row',//
        paddingRight: 15,//
        alignItems:'center',//
        backgroundColor: '#F3B6B6',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        justifyContent: 'center',
        paddingLeft: width * 0.04, //mudei para ficar mais proximo da barrinha esquerda 
    }, 
    mainContent: {

    },
    listaConteudos: {

    },
    textoTituloAccordion: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
}

})