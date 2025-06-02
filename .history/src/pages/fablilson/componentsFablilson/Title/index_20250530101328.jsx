import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
    <>
    <div className="flex items-center justify-between bg-gray-600 px-5 py-4">
    <div className="flex items-center space-x-3">
    <img
    src="https://img.freepik.com/fotos-gratis/tiro-vertical-de-baixo-angulo-de-arranha-ceus-em-uma-fachada-de-vidro-em-frankfurt-alemanha_181624-7114.jpg?ga=GA1.1.1426356154.1748610575&semt=ais_items_boosted&w=740"
    alt="Logo"
    className="h-10 w-auto"
    />
    <h1 className="text-white text-xl font-bold">LISTA DE FUNCIÓNARIOS</h1>
    </div>
   <div>
    <BarradePesquisa />
  </div>
  </div>
  </>
  );
}
 
export default Title;