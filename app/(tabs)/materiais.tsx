import Accordion from "@/components/Accordion";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const {width, height} = Dimensions.get('window');

export default function Materiais(){
    const listaConteudos = [
        {id: 1, nome: 'Conjuntos'},
        {id: 2, nome: 'Conjuntos Numericos'},
        {id: 3, nome: 'Funções'},
        {id: 4, nome: 'Função Afim'},
        {id: 5, nome: 'Função Quadrátrica'},
        {id: 6, nome: 'Função Modular'},
        {id: 7, nome: 'Funções Exponencial'},
        {id: 8, nome: 'Logaritmo e Função Logarítmica'},
        {id: 9, nome: 'Sequências Númericas'},
        {id: 10, nome: 'Trigonometria'},
        {id: 11, nome: 'Matrizes'},
        {id: 12, nome: 'Sistemas Lineares'},
        {id: 13, nome: 'Geometria Plana'},
        {id: 14, nome: 'Geometria Espacial'},
        {id: 15, nome: 'Análise Combinatória, Probabilide e Tratamento da Informação'},
        {id: 16, nome: 'Matemática Financeira'},
        {id: 17, nome: 'Estatística Básica'},
        {id: 18, nome: 'Geometria Analítica'},
        {id: 19, nome: 'Circunferência'},
        {id: 20, nome: 'Crônicas'},
    ];
    const listaMateriais = [
        { id: 1, nome: 'Vídeo aulas' },
        { id: 2, nome: 'Resumos' },
        { id: 3, nome: 'Listas de exercícios' },
    ];  
    const listaLinks = [
        { id: 1, nome: 'Link com o Professor fulano' },
        { id: 2, nome: 'Link com o Professor sicrano' },
        { id: 3, nome: 'Link com o Professor antonio' },
    ];
    
    

    const conteudosAccordion = listaLinks.map((item, index) => <Text key={item.id} style={styles.textoAccordionInterno}>{item.nome}</Text>)
    const accordions = listaMateriais.map(item =>
        <Accordion key={item.id} estilo={styles.elementoAccordionInterno} titulo={item.nome} itens={conteudosAccordion}/>
    );
    const conteudos = ["Conteúdo 1", "Conteúdo 2", "Conteúdo 3"]
    const conteudosText = conteudos.map((item, index) => <Text style={styles.elementoAccordion}>{item}</Text>)

    return(
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />
            <ScrollView>
                
                <View style={styles.mainContent}>
                    <View style={styles.listaConteudos}>
        
                    {listaConteudos.map((item, index) => (
                        <Accordion
                            key={item.id}
                            estilo={styles.elementoAccordion}
                            titulo={item.nome}
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
        backgroundColor: '#FEADA6',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: height * 0.02,
        justifyContent: "center"  
    },
    elementoAccordionInterno: {
        backgroundColor: '#FEDBD8',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: height * 0.001,
        justifyContent: "center"  
    },
    textoAccordionInterno: {
        backgroundColor: '#F3B6B6',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        justifyContent: 'center',
        lineHeight: height * 0.07,
        color: '#002AFF',
        paddingLeft: width * 0.05
    }, 
    mainContent: {

    },
    listaConteudos: {

    }
})