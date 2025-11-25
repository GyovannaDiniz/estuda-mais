import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';

const {width, height} = Dimensions.get('window');

const Accordion = (props) => {

    const titulo = props.titulo;
    const estilo = props.estilo;
    const itens = props.itens;
    const iconeAdicionar = false || props.iconeAdicionar;
    const iconeRemover = false || props.iconeRemover;
    const corTexto = props.corTexto; 
    const onPress = props.onPress;
    

    const [exibirLista, setExibirLista] = useState(false);

    const alternarVisibilidade = () => {
        setExibirLista(!exibirLista);
    }


    return (
    <View>
        <TouchableOpacity style={estilo} onPress={onPress || alternarVisibilidade}>
            <Text style={[styles.accordionText, {color: corTexto || 'black'} , props.textStyle]}>{titulo}</Text>
            { iconeAdicionar && (
                <Link href="/adicionar">
                    <FontAwesome6 name="add" size={15} color="black" />
                </Link>
            )}
            { iconeRemover && (
                <TouchableOpacity onPress={props.onRemovePress}>
                    <FontAwesome6 name="trash-can" size={15} color="black" />
                </TouchableOpacity>
            )}
            
            
        </TouchableOpacity>
        {exibirLista && 
        <View style={styles.accordionContainer}>
            {itens.map((item, index) => (item))}
        </View>
        }
    </View>
    );
};

const styles = StyleSheet.create({
    accordionItem : {
        backgroundColor: "#ffdad7",
        borderRadius: width * 0.03,
        fontSize: 15,
        height: height * 0.07,
        width: width * 0.8,
        //marginTop: height * 0.2
        //marginVertical: height * 0.0001
    },
    accordionContainer: {
        flex: 1,
        flexDirection: "column",
    },
    accordionText: {
        flex: 1,
        padding: 12,
        marginLeft: 10,
    },
   
    
});

export default Accordion;