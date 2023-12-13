import React, { useState, useEffect } from "react";
import { carregaProdutores } from "../Services/CarregaDados";

export function UseProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    return [titulo, lista]
}