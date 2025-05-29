import { useState } from "react";
import listaDeContatinhos from 'module';
import Container from "./componentsHideki/Container";
import Tabela from "./componentsHideki/Tabela";
import Titulo from "./componentsHideki/Titulo";

const Hideki = () => {
    const [contatinhos, setContatinhos] = useState([]);

    return (
        <Container>
            <Titulo onChange={}/>
            <Tabela esquemas={contatinhos}/>
        </Container>
    );
}

export default Hideki;