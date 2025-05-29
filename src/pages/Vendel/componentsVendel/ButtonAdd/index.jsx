import { useState } from 'react';
import { Button } from '@heroui/button';
import { FiPlus } from 'react-icons/fi';
import ContactForm from '../ContactForm';

const ButtonAdd = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    const handleOpenForm = () => {
        setIsFormOpen(true);
    };
    
    const handleCloseForm = () => {
        setIsFormOpen(false);
    };
    
    return (  
        <>
            <Button 
                onclick={handleOpenForm}
                variant="primary"
                className="flex items-center gap-2"
            >
                <FiPlus /> Adicionar Contato
            </Button>
            
            <ContactForm 
                isOpen={isFormOpen} 
                onClose={handleCloseForm} 
                contactToEdit={null} 
            />
        </>
    );
}
 
export default ButtonAdd;