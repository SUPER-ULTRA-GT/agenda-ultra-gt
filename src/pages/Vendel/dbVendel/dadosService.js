import contacts from './dados';

// Simula um banco de dados em memória
let contactList = [...contacts];

export const ContactService = {
    // Listar todos os contatos
    getAllContacts: () => {
        return [...contactList];
    },

    // Adicionar novo contato
    addContact: (newContact) => {
        const lastId = contactList.length > 0 
            ? Math.max(...contactList.map(contact => contact.id))
            : 0;
            
        const contact = {
            id: lastId + 1,
            nome: newContact.nome,
            email: newContact.email,
            telefone: newContact.telefone
        };

        contactList.push(contact);
        return contact;
    },

    // Atualizar contato existente
    updateContact: (id, updatedContact) => {
        const index = contactList.findIndex(contact => contact.id === id);
        
        if (index === -1) {
            throw new Error('Contato não encontrado');
        }

        contactList[index] = {
            ...contactList[index],
            ...updatedContact,
            id // Mantém o ID original
        };

        return contactList[index];
    },

    // Deletar contato
    deleteContact: (id) => {
        const index = contactList.findIndex(contact => contact.id === id);
        
        if (index === -1) {
            throw new Error('Contato não encontrado');
        }

        contactList = contactList.filter(contact => contact.id !== id);
        return true;
    },

    // Buscar contato por ID
    getContactById: (id) => {
        const contact = contactList.find(contact => contact.id === id);
        
        if (!contact) {
            throw new Error('Contato não encontrado');
        }

        return contact;
    },

    // Buscar contatos por nome
    searchContactsByName: (query) => {
        const searchTerm = query.toLowerCase();
        return contactList.filter(contact => 
            contact.nome.toLowerCase().includes(searchTerm)
        );
    }
};