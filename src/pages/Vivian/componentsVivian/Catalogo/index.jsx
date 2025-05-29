import Card from "../Card";

const Catalogo = ({contatos , removerContato}) => {
    return ( 
       <div className="space-y-10">
      {contatos.length === 0 ? (
        <p className="text-center text-gray-500"></p>
      ) : (
        contatos.map((contato, index) => (
          <Card
            key={index}
            nome={contato.nome}
            email={contato.email}
            onRemover={() => removerContato(index)}
          />
        ))
      )}
    </div>
    ) ;
}
 
export default Catalogo;