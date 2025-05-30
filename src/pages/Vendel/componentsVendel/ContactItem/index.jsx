import ButtonRemove from '../ButtonRemove';

const ContactItem = ({ contact, onContactDeleted }) => {
    return ( 
        <div className="flex items-center justify-between p-3 border-b hover:bg-gray-50">
            <div className="flex-1">{contact.nome}</div>
            <div className="flex-1">{contact.email}</div>
            <div className="flex-1">{contact.telefone}</div>
            <div className="flex items-center justify-end">
                <ButtonRemove 
                    contactId={contact.id} 
                    onContactDeleted={onContactDeleted} 
                />
            </div>
        </div>
     );
}
 
export default ContactItem;