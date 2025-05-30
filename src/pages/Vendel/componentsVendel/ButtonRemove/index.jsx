import { useState } from 'react';
import { Button } from '@heroui/button';
import { Popover } from '@heroui/popover';
import { FiTrash2 } from 'react-icons/fi';
import { ContactService } from '../../dbVendel/dadosService';

const ButtonRemove = ({ contactId, onContactDeleted }) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    
    const handleOpenConfirm = () => {
        setIsConfirmOpen(true);
    };
    
    const handleCloseConfirm = () => {
        setIsConfirmOpen(false);
    };
    
    const handleDelete = () => {
        try {
            ContactService.deleteContact(contactId);
            handleCloseConfirm();
            if (onContactDeleted) {
                onContactDeleted();
            }
        } catch (error) {
            console.error('Erro ao excluir contato:', error);
        }
    };
    
    return (
        <>
            <Button 
                onclick={handleOpenConfirm}
                variant="danger"
                size="sm"
                className="p-2"
            >
                <FiTrash2 />
            </Button>
            
            {/* <Popover open={isConfirmOpen} onClose={handleCloseConfirm}>
                <Popover.Panel className="p-4 bg-white rounded-lg shadow-lg w-64">
                    <h3 className="text-lg font-medium mb-3">Confirmar exclusão</h3>
                    <p className="mb-4 text-gray-600">Tem certeza que deseja excluir este contato?</p>
                    
                    <div className="flex justify-end gap-2">
                        <Button 
                            onclick={handleCloseConfirm}
                            variant="secondary"
                            size="sm"
                        >
                            Não
                        </Button>
                        <Button 
                            onclick={handleDelete}
                            variant="danger"
                            size="sm"
                        >
                            Sim
                        </Button>
                    </div>
                </Popover.Panel>
            </Popover> */}
        </>
    );
};

export default ButtonRemove;