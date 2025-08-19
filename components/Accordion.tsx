import React, { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get('window');

const Accordion = ({ titulo, estilo, itens }) => {

    const [exibirLista, setExibirLista] = useState(false);

    const alternarVisibilidade = () => {
        setExibirLista(!exibirLista);
    }

    return (
    <View>
        <TouchableOpacity style={estilo} onPress={alternarVisibilidade}>
            <Text style={styles.accordionText}>{titulo}</Text>
        </TouchableOpacity>
        {exibirLista && <View style={styles.accordionContainer}>
                {itens.map((item, index) => (
            <Text key={index} style={styles.accordionItem}> {item} </Text>

                ))}
        </View>}
    </View>
    );
};

const styles = StyleSheet.create({
    accordionItem : {
        backgroundColor: "#ffdad7",
        borderRadius: width * 0.02,
        fontSize: 15,
        height: height * 0.07,
        width: width * 0.8,
        justifyContent: "center",
        
    },
    accordionContainer: {
        flex: 1,
        flexDirection: "column"
    },
    accordionText: {
        padding: 12,
        marginLeft: 10
    }
});

export default Accordion;