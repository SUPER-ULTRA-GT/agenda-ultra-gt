import { useState, useEffect } from 'react';
import { Popover } from '@heroui/popover';
import { ContactService } from '../../dbVendel/dadosService';

const ContactForm = ({ isOpen, onClose, contactToEdit = null }) => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    });
    
    const [isEditing, setIsEditing] = useState(false);
    
    useEffect(() => {
        if (contactToEdit) {
            setFormData({
                nome: contactToEdit.nome,
                email: contactToEdit.email,
                telefone: contactToEdit.telefone
            });
            setIsEditing(true);
        } else {
            setFormData({
                nome: '',
                email: '',
                telefone: ''
            });
            setIsEditing(false);
        }
    }, [contactToEdit]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            if (isEditing && contactToEdit) {
                ContactService.updateContact(contactToEdit.id, formData);
            } else {
                ContactService.addContact(formData);
            }
            
            // Reset form and close popover
            setFormData({
                nome: '',
                email: '',
                telefone: ''
            });
            onClose();
        } catch (error) {
            console.error('Erro ao salvar contato:', error);
        }
    };
    
    return (
        <Popover open={isOpen} onClose={onClose} backdrop='blur'>
            <Popover.Panel className="p-6 bg-white rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">
                    {isEditing ? 'Editar Contato' : 'Adicionar Novo Contato'}
                </h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                            Telefone
                        </label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            {isEditing ? 'Atualizar' : 'Adicionar'}
                        </button>
                    </div>
                </form>
            </Popover.Panel>
        </Popover>
    );
};

export default ContactForm;