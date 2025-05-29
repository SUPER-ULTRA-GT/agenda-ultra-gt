import search from '../../assetsVivian/magnifier.png'

const Search = ({setBusca}) => {
    return ( 
        <div className='flex border p-2 rounded gap-2 mb-4 '>
        <img src={search} alt="icone de pesquisa" className='w-5' />
        <input type="text" name="" id="contato" placeholder="Digite o nome do contato:" onChange={(e)=> setBusca(e.target.value)}
         className='w-full ml-2.5 px-4 py-1' />
        </div>
     );
}
 
export default Search;