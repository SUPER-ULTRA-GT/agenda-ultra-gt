import search from '../../assetsVivian/magnifier.png'

const Search = () => {
    return ( 
        <div className='flex border-1 p-1 px-1.5'>
        <img src={search} alt="icone de pesquisa" className='w-5' />
        <input type="text" name="" id="contato" placeholder="Digite o nome do contato:" className='w-full ml-2.5 px-4 py-1' />
        </div>
     );
}
 
export default Search;