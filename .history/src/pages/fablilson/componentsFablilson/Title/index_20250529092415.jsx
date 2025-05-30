import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
        <>
        <div className="flex justify-between bg-gray-600  px-5 py-4" >
        <h1 className=" text-white justify-center" >AGENDA DE E-MAILS</h1>
        <h1 className="text-white">Data</h1>
        <BarradePesquisa />
        </div>
        </>
     );
}
 
export default Title;