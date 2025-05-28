import { useState, useEffect } from 'react';
import { ContactService } from '../../dbVendel/dadosService';
import ContactItem from '../ContactItem';
import ContactForm from '../ContactForm';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    
    useEffect(() => {
        loadContacts();
    }, []);
    
    const loadContacts = () => {
        const allContacts = ContactService.getAllContacts();
        setContacts(allContacts);
    };
    
    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        setIsFormOpen(true);
    };
    
    const handleCloseForm = () => {
        setIsFormOpen(false);
        setSelectedContact(null);
        loadContacts(); // Reload contacts after form closes
    };
    
    return ( 
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-gray-100 font-bold border-b">
                <div className="flex-1">Nome</div>
                <div className="flex-1">Email</div>
                <div className="flex-1">Telefone</div>
                <div className="w-10"></div> {/* Space for action button */}
            </div>
            
            {/* Contact Items */}
            {contacts.map(contact => (
                <div 
                    key={contact.id} 
                    onClick={() => handleContactClick(contact)}
                    className="cursor-pointer"
                >
                    <ContactItem 
                        contact={contact} 
                        onContactDeleted={loadContacts} 
                    />
                </div>
            ))}
            
            {/* Edit Contact Form */}
            {/* <ContactForm 
                isOpen={isFormOpen}
                onClose={handleCloseForm}
                contactToEdit={selectedContact}
            /> */}
        </div>
     );
}
 
export default ContactList;