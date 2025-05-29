export const BarraDePesquisa = ({ handleInputChange }) => {

    return ( 
            <input
                type="text" 
                onChange={handleInputChange}
                placeholder='Pesquisar contato'
                className="bg-gray-100 border border-gray-300 rounded-[8px] px-5 w-[70vw] text-center mb-10" />
     );
}