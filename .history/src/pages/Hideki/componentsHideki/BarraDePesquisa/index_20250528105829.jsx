const BarraDePesquisa = ({ onChange }) => {
    return (

        <input
            type="text"
            placeholder="Pesquise seu contatinho"
            onChange={() => onChange()}
        />
    )
}

export default BarraDePesquisa;