import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
    <>
    <div className="flex items-center justify-between bg-gray-600 px-5 py-4">
    <div className="flex items-center space-x-3">
    <video width="640" height="360" controls autoPlay loop>
        <source src="/caminho/para/o/video.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
        
      </video>
  
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