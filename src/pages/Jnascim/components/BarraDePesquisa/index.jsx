import icone from '../../assets/search.png'

const BarraDePesquisa = () => {
    return (  
        <div className=' flex w-full border-1 p-2 px-1.5'>
      
        <img src={icone} alt="icone de pesquisa" className='w-7'/>
        <input type="text" name="" id="contato " placeholder="Digite seu contato" className='w-full ml-2.5 px-4'/>
        
        </div>
    );
}
 
export default BarraDePesquisa;