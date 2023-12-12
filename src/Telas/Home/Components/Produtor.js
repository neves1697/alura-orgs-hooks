import React from "react";
import { Text, View, Image } from 'react-native';


export default function Produtor({ nome, imagem, distancia, estrelas }) {
    return <>
        <View>
            <Image source={imagem}
                accessibilityLabel={nome} // pessoas com deficiência visual possam ter acesso à informação.
            />

            <View>
                <Text> {nome} </Text>
                <Text> {distancia} </Text>
            </View>


        </View>
    </>
}