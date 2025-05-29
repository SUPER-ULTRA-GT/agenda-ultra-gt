import { useState } from 'react';
import Container from '../Matheus/ComponentsMatheus/ContactList';
import Card from '../Matheus/ComponentsMatheus/card';
import Title from '../Matheus/ComponentsMatheus/Title';
import AddButton from '../Matheus/ComponentsMatheus/addButton';
import SearchBar from '../Matheus/ComponentsMatheus/SearchMatheus';
import ContactList from '../Matheus/ComponentsMatheus/ContactList';
import ContactItem from '../Matheus/ComponentsMatheus/ContactItem';

const Matheus = () => {
    const [search, setSearch] = useState('');

    return ( 
        <Container>
            <Card>
                <Title>Lista de Contatos</Title>
                <div className="flex justify-evenly items-center">
                    <AddButton onClick={() => alert('Adicionar contato')} />
                    <SearchBar 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                </div>
                <ContactList>
                    <ContactItem name="Contato Aleatório" />
                </ContactList>
            </Card>
        </Container>
     );
}
 
export default Matheus;