import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
        <>
        <div className="flex justify-between bg-gray-600  px-5 py-4" >
        <h1 className="text-white">LISTA DE EMPRESAS</h1>
       <img src="ass" alt="Logo" className="h-10 w-auto" />
        <BarradePesquisa />
        </div>
        </>
     );
}
 
export default Title;