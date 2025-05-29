import { useState, useEffect } from 'react';
import { api } from './services/api'
import { Rows } from './components/Rows';
import { TableHead } from './components/TableHead';
import { BarraDePesquisa } from './components/BarraDePesquisa';

export const Julia = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        api.get('/contacts').then((response) => {
            setContacts(response.data)
        })
    }, [])

// BARRA DE PESQUISA 
    const [searchedContact, setSearchedContact] = useState('')

    function handleInputChange(e) {
        setSearchedContact(e.target.value)
    }

    return ( 
        <div className="flex flex-col items-center mt-5 h-screen w-screen">
            <BarraDePesquisa handleInputChange={handleInputChange}/>
            
            <table className='w-[70%] table-fixed rounded-4 text-center border border-gray-300'>
                <TableHead />

                {contacts.filter(contact => {
                        return searchedContact.toLowerCase() === '' 
                            ? contact
                            : contact.name.toLowerCase().includes(searchedContact)
                    })
                  

                .map(contact => {
                        return <Rows 
                            key={contact.id}
                            name={contact.name}    
                            email={contact.email}
                        />
                    })
                }
                
            </table>
        </div>
     );
}