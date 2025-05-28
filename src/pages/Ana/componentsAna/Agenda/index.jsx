const Agenda = ({ itens, toggleConcluido }) => {
    return (
        <ul>
            {items.map(item => (
                <li
                key={item.id}
                onClick={() => toggleConcluido(item.id)}
                style={{
                    textDecoration: item.concluido ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
                >
                    {item.nome}
                </li>
            ))}
        </ul>
    );
};

export default Agenda;