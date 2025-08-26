import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const {width, height} = Dimensions.get('window');

const Accordion = (props) => {

    titulo = props.titulo;
    estilo = props.estilo;
    itens = props.itens;
    iconeAdicionar = false || props.iconeAdicionar;
    iconeRemover = false || props.iconeRemover;

    const [exibirLista, setExibirLista] = useState(false);

    const alternarVisibilidade = () => {
        setExibirLista(!exibirLista);
    }


    return (
    <View>
        <TouchableOpacity style={estilo} onPress={alternarVisibilidade}>
            <Text style={styles.accordionText}>{titulo}</Text>
            { iconeAdicionar ? 
                <FontAwesome6 name="add" size={15} color="black" />
                : false
            }
              { iconeRemover ? 
                <FontAwesome6 name="trash-can" size={15} color="black" />
                : false
            }
            
            
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