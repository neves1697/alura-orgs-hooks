import React, { useEffect, useState } from "react";
import { FlatList, Text } from 'react-native';
import { carregaProdutores } from "../../../Services/CarregaDados";

export default function Produtores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();

        setTitulo(retorno.titulo);
        setLista(retorno.lista);
        //console.log(retorno);
    }, []);// os colchetes chaman apenas uma vez a função que está no useEffect()

    return <>
        <FlatList
            data={lista}
            renderItem={({ item: { nome } }) =>
                <Text> {nome} </Text>
            }
            ListHeaderComponent={() =>
                <Text> {titulo} </Text>
            }
        />
    </>
}