import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

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
       borderRadius: 4,
       fontSize: 15
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