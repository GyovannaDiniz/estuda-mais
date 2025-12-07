import Accordion from "@/components/Accordion";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View, Linking, Modal, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Materiais() {
  const [materiais, setMateriais] = useState([]);
  const [tipo, setTipo] = useState([]);
  const [conteudo, setConteudo] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [materialParaExcluir, setMaterialParaExcluir] = useState(null);

  useEffect(() => {
    const fetchMateriais = async () => {
      const response = await fetch("https://silver-barnacle-x5p6qv5rvx9gh6449-3000.app.github.dev/api/material");
      const data = await response.json();
      setMateriais(data);
    };

    const fetchTipo = async () => {
      const response = await fetch("https://silver-barnacle-x5p6qv5rvx9gh6449-3000.app.github.dev/api/tipo");
      const data = await response.json();
      setTipo(data);
    };

    const fetchConteudo = async () => {
      const response = await fetch("https://silver-barnacle-x5p6qv5rvx9gh6449-3000.app.github.dev/api/conteudo");
      const data = await response.json();
      setConteudo(data);
    };

    fetchConteudo();
    fetchTipo();
    fetchMateriais();
  }, []);

  const abrirModalExcluir = (idMaterial) => {
    setMaterialParaExcluir(idMaterial);
    setModalVisible(true);
  };

  const removerMaterial = async () => {
    if (!materialParaExcluir) return;

    await fetch("https://silver-barnacle-x5p6qv5rvx9gh6449-3000.app.github.dev/api/material/${materialParaExcluir}", {
      method: "DELETE",
    });

    setMateriais((prev) => prev.filter((m) => m.id !== materialParaExcluir));
    setModalVisible(false);
    setMaterialParaExcluir(null);
  };

  const filtrarMateriaisPorTipo = (idConteudo, idTipo) => {
    return materiais.filter((m) => m.idconteudo == idConteudo && m.idtipo == idTipo);
  };

  const accordions = (idConteudo) =>
    tipo.map((item) => (
      <Accordion
        key={item.id}
        estilo={styles.elementoAccordionInterno}
        titulo={item.nome}
        itens={filtrarMateriaisPorTipo(idConteudo, item.id).map((m) => (
          <Accordion
            key={m.id}
            estilo={styles.textoAccordionInterno}
            titulo={m.descricao}
            corTexto="#002AFF"
            iconeRemover
            onRemovePress={() => abrirModalExcluir(m.id)}
            onPress={() => Linking.openURL(m.link)}
          />
        ))}
      />
    ));

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logoEstuda.png")} style={styles.imagem} />

      <ScrollView>
        <View style={styles.mainContent}>
          <View style={styles.listaConteudos}>
            {conteudo.map((item) => (
              <Accordion
                key={item.id}
                estilo={styles.elementoAccordion}
                titulo={item.nome}
                textStyle={styles.textoTituloAccordion}
                itens={accordions(item.id)}
                iconeAdicionar
                onAddPress={() => {}}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Image source={require("@/assets/images/erro.png")} style={styles.modalIcon} />
            <Text style={styles.modalMessage}>Tem certeza que deseja remover este item?</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.confirmButton} onPress={removerMaterial}>
                <Text style={styles.confirmText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
        color: '#000',
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: width * 0.8,
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },
    modalIcon: {
        width: width * 0.10,
        height: height * 0.05,
        marginBottom: 15,
        resizeMode: 'contain',
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        gap: 15,
    },
    cancelButton: {
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.04,
        backgroundColor: "#eae5e5ff",
        borderRadius: 8,
    },
    cancelText: {
        color: "#000",
        fontSize: 14,
    },
    confirmButton: {
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.04,
        backgroundColor: "#FEADA6",
        borderRadius: 8,
    },
    confirmText: {
        color: '#fff',
        fontSize: 14,
    },
});
