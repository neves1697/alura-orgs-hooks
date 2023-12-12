import React from "react";

import Topo from './Components/Topo';
import Produtores from "./Components/Produtores";

export default function Home() {
    return <>
        <Produtores topo={Topo} />
    </>
}