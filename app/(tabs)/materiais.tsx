import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Accordion from "@/components/Accordion";

const {width, height} = Dimensions.get('window');

export default function Materiais(){
    return(
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/logoEstuda.png')}
                style={styles.imagem}
            />
            <ScrollView>
                <Accordion 
                    titulo="Conjuntos" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="conjuntos numericos" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="funções" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >  
                </Accordion>

                <Accordion 
                    titulo="função afim" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="função quadrátrica" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >                   
                </Accordion>
                
                <Accordion 
                    titulo="função modular" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="função exponencial" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="logaritmo e função logarítmica" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="sequências númericas" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="trigonometria" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="matrizes" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="sistemas lineares" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>
                
                <Accordion 
                    titulo="geometria plana"
                    estilo={styles.elementoAccordion} 
                   itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="geometria espacial" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="análise combinatória, probabilide e tratamento da informação" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="matemática financeiraonjuntos" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="estatística básica" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="geometria analítica" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="circunferência" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>

                <Accordion 
                    titulo="crônicas" 
                    estilo={styles.elementoAccordion} 
                    itens={["Vídeos aulas", "Lista de exercicio ", "Resumos"]}
                >
                </Accordion>
              
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

    input: {
        backgroundColor: '#FEADA6',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: height * 0.02,
        justifyContent: "center"
    },

     texto: {
        textAlign: 'center',
        fontSize: 17,
        color: '#000',
        fontWeight:'bold',
    },
    elementoAccordion: {
        backgroundColor: '#FEADA6',
        borderRadius: width * 0.2,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: height * 0.02,
        justifyContent: "center"  
    }
})