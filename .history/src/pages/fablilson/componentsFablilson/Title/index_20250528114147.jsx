import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
        <>
        <div className="flex justify-between bg-gray-100" >
        <h1 className=" text-white px-1.5 py-1" >agenda de emails</h1>
        <BarradePesquisa />
        </div>
        </>
     );
}
 
export default Title;