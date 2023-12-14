import React, { useReducer, useState, useMemo } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Estrelas from "../../../Components/Estrelas";

const distanciaMetros = (distancia) => {
    console.log('Teste');
    return `${distancia}m`;
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    );

    const distanciaTexto = useMemo(() =>
        distanciaMetros(distancia), [distancia]);

    return <>
        <TouchableOpacity style={estilos.cartao}
            onPress={inverterSelecionado}
        >
            <Image style={estilos.imagem}
                accessibilityLabel={nome} // pessoas com deficiência visual possam ter acesso à informação.
                source={imagem}
            />

            <View style={estilos.informacoes} >

                <View>
                    <Text style={estilos.nome} > {nome} </Text>

                    <Estrelas
                        quantidade={estrelas}
                        editavel={selecionado}
                        grande={selecionado}
                    />

                </View>

                <Text style={estilos.distancia} > {distanciaTexto} </Text>
            </View>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',

        //android
        elevation: 4, //fazendo a sombra do cartão

        // iOS
        shadowColor: '#000',
        textShadowOffset: {
            width: 0,
            height: 2
        },

        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },

    imagem: {
        width: 48,
        height: 48,
        borderRadius: 8,
        marginVertical: 16,
        marginLeft: 16
    },

    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },

    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },

    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
});