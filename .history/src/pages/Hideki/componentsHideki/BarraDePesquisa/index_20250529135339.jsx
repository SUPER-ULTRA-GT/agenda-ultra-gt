const BarraDePesquisa = ({ onChange }) => {
    return (
        <input
            type="text"
            placeholder="Digite o nome do contatinho"
            className="w-64 h-12 border-2 border-solid border-white rounded-3xl px-6 focus:placeholder:text-transparent"
            onChange={() => onChange}
        />
    );
}

export default BarraDePesquisa;