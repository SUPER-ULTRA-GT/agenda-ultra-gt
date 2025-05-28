import search from '../../assets/search.png'

const Search = () => {
    return ( 
        <div className='flex border-1 px-1.5 mt-2.5 rounded'>
            <img src={search} alt="ícone de pesquisa"  className="w-8 border-r px-1"/>
            <input type="text" name="contato" placeholder="Digite o nome do seu contato..." className=' w-full ml-2.5 px-4 py-1'/>
        </div>
     );
}
 
export default Search;