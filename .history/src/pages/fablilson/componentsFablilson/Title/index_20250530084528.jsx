import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
    <>
    <div className="flex items-center justify-between bg-gray-600 px-5 py-4">
    <div className="flex items-center space-x-3">
    <img
    src="https://images.vexels.com/media/users/3/144882/isolated/svg/a98fa07f09c1d45d26405fa48c344428.svg"
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