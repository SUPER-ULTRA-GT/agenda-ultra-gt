import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
        <>
        <div className="flex justify-between bg-gray-600  px-5 py-4" >
        <h1 className=" text-white" >AGENDA DE E-MAILS</h1>
        <h2 className="text-white">
        <BarradePesquisa />
        </div>
        </>
     );
}
 
export default Title;