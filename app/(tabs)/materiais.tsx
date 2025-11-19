import Accordion from "@/components/Accordion";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View, Linking, Link  } from "react-native";

const {width, height} = Dimensions.get('window');

export default function Materiais(){
const [materiais, setMateriais] = useState([]);
const [tipo, setTipo] = useState([]);
const [conteudo, setConteudo] = useState([]);

  useEffect(() => {
    const fetchMateriais = async () => {
      const response = await fetch('https://scaling-space-train-5gr6pxgvx5jqhv4v4-3000.app.github.dev/api/material');
      const data = await response.json();
      setMateriais(data);
    }

    const fetchTipo = async () => {
      const response = await fetch('https://scaling-space-train-5gr6pxgvx5jqhv4v4-3000.app.github.dev/api/tipo');
      const data = await response.json();
      setTipo(data);
    }

    const fetchConteudo = async () => {
      const response = await fetch('https://scaling-space-train-5gr6pxgvx5jqhv4v4-3000.app.github.dev/api/conteudo');
      const data = await response.json();
      setConteudo(data);
    }

    fetchConteudo();
    fetchTipo();
    fetchMateriais();
  }, [])


    
    const filtrarMateriaisPorTipo = (idConteudo, idTipo) => {
        const materiaisFiltrado = materiais.filter(m => m.idconteudo == idConteudo && m.idtipo == idTipo);
        console.log(materiais.filter, idConteudo, idTipo, materiaisFiltrado);
        return materiaisFiltrado;
    }

    
        
    
    const accordions = (idConteudo) => tipo.map(item => (
        <Accordion
            key={item.id}
            estilo={styles.elementoAccordionInterno}
            titulo={item.nome}
            itens={filtrarMateriaisPorTipo(idConteudo, item.id).map(m => (
                
                 <Accordion
                    key={m.id || index}
                    estilo={styles.textoAccordionInterno}
                    titulo={m.descricao}
                    corTexto="#002AFF"
                    iconeRemover   
                    onPress={() => Linking.openURL(m.link)}
                />
                
            ))}
       
        />
));

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
                                itens={accordions(item.id)}
                                iconeAdicionar
                                onAddPress={() => {
                                   <Link href='/adiconar' asChild/>
                                }}
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
        borderRadius: width * 0.03,
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
        borderRadius: width * 0.02,
        height: height * 0.07,
        width: width * 0.8,
        marginTop: 0.2,
        justifyContent: "center",  
        paddingRight: 25,
        alignItems: 'center', 
        paddingLeft: width * 0.02, 
     
    },

    textoAccordionInterno: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FEDBD8',
        borderRadius: width * 0.01,
        minHeight: height * 0.07,  // altura mínima
        width: width * 0.8,
        justifyContent: 'flex-start', // centralizar horizontalmente
        paddingHorizontal: width * 0.04 ,
        flexWrap: 'wrap',  // permite quebra de linha
    },
   
    textoTituloAccordion: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
}

})