import React, { useEffect } from "react";
import { Text } from 'react-native';
import { carregaProdutores } from "../../../Services/CarregaDados";

export default function Produtores() {
    useEffect(() => {
        const retorno = carregaProdutores();
        console.log(retorno);
    }, []);// os colchetes chaman apenas uma vez a função que está no useEffect()

    return <>
        <Text>Teste</Text>
    </>
}