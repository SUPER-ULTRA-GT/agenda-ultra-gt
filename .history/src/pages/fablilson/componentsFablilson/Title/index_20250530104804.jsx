import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
    <>
    <div className="flex items-center justify-between bg-gray-600 px-5 py-4">
    <div className="flex items-center space-x-3">
    <img
    src="https://img.freepik.com/vetores-gratis/logotipo-do-edificio-3d_1025-14.jpg?ga=GA1.1.1426356154.1748610575&semt=ais_items_boosted&w=740"
    alt="Logo"
    className="h-30 w-auto rounded-full border-2 "
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