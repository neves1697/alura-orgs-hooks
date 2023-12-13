import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';


export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = true,
    grande = true,
}) {

    const [quantidade, setQuantidade] = useState(quantidadeAntiga);
    const estilos = estilosFunction(grande);

    const getImage = (index) =>{
        if(index < quantidade){
            return estrela;
        }

        return estrelaCinza;
    }

    const RenderEstrelas = () => {
        const listaEstrelas = [];

        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => { }}
                    disabled={!editavel}
                >
                    <Image source={getImage(i)} style={estilos.estrela} />
                </TouchableOpacity>
            );

        }

        return listaEstrelas;
    }

    return <>
        <View style={estilos.estrelas} >
            <RenderEstrelas />
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