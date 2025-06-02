import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
     <>
       <div className="flex items-center justify-between bg-gray-600 px-5 py-4">
      <div className="flex items-center space-x-3">
      <img
      src="logo.png"
      alt="Logo"
      className="h-10 w-auto"
     />
     <h1 className="text-white text-xl font-bold">LISTA DE EMPRESAS</h1>
  </div>

  {/* Lado direito: barra de pesquisa */}
  <div>
    <BarradePesquisa />
  </div>
</div>

        </>
     );
}
 
export default Title;