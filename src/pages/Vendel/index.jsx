import ContactList from "./componentsVendel/ContactList";

const Vendel = () => {
    return (  
        <div className="flex flex-col items-center justify-between w-full h-full p-4 bg-gray-50">
            <h1>Lista de Contados do Expresso Astral</h1>
            <ContactList />
        </div>
    );
}
 
export default Vendel;