import React from "react";
import { Image, StyleSheet, View } from "react-native";
import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';


export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}) {

    const estilos = estilosFunction(grande);

    return <>
        <View style={estilos.estrelas} >
            <Image source={estrela} style={estilos.estrela} />
            <Image source={estrela} style={estilos.estrela} />
        </View>
    </>
}

const estilosFunction = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
        marginRight: 2
    },

    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
    }
});