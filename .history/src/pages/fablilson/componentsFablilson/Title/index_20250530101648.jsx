import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
    <>
    <div className="flex items-center justify-between bg-gray-600 px-5 py-4">
    <div className="flex items-center space-x-3">
    <img
    src="https://videos.pexels.com/video-files/32327638/13789795_360_640_25fps.mp4"
    alt="Logo"
    className="h-20 w-auto"
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