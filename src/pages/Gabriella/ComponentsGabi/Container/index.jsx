import ContactCard from '../Card';

export default function CatalogoContatos({ contatos }) {
  return (
    <div className="grid gap-2">
      {contatos.length > 0 ? (
        contatos.map((contato, index) => (
          <ContactCard
            key={index}
            nome={contato.nome}
            numero={contato.numero}
            instagram={contato.instagram}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">Nenhum contato encontrado.</p>
      )}
    </div>
  );
}