import Accordion from "@/components/Accordion";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const {width, height} = Dimensions.get('window');

export default function Materiais(){
    const listaConteudos = [
        {id: 1, nome: '1. Conjuntos'},
        {id: 2, nome: '2. Conjuntos Numericos'},
        {id: 3, nome: '3. Funções'},
        {id: 4, nome: '4. Função Afim'},
        {id: 5, nome: '5. Função Quadrátrica'},
        {id: 6, nome: '6. Função Modular'},
        {id: 7, nome: '7. Funções Exponencial'},
        {id: 8, nome: '8. Logaritmo e Função Logarítmica'},
        {id: 9, nome: '9. Sequências Númericas'},
        {id: 10, nome: '10. Trigonometria'},
        {id: 11, nome: '11. Matrizes'},
        {id: 12, nome: '12. Sistemas Lineares'},
        {id: 13, nome: '13. Geometria Plana'},
        {id: 14, nome: '14. Geometria Espacial'},
        {id: 15, nome: '15. Análise Combinatória, Probabilide e Tratamento da Informação'},
        {id: 16, nome: '16. Matemática Financeira'},
        {id: 17, nome: '17. Estatística Básica'},
        {id: 18, nome: '18. Geometria Analítica'},
        {id: 19, nome: '19. Circunferência'},
        {id: 20, nome: '20. Crônicas'},
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
    
    

    const conteudosAccordion = listaLinks.map((item, index) => 
        <Accordion key={item.id} estilo={styles.textoAccordionInterno} titulo={item.nome} corTexto='#002AFF' iconeRemover />
    );
        
    const accordions = listaMateriais.map(item =>
        <Accordion key={item.id} estilo={styles.elementoAccordionInterno} iconeNaoAtivo titulo={item.nome} itens={conteudosAccordion} iconeAdicionar />
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
        flexDirection: 'row',
        backgroundColor: '#FEADA6',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: height * 0.02,
        justifyContent: "center",  
        paddingRight: 15,
        alignItems: 'center'
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

    }
})