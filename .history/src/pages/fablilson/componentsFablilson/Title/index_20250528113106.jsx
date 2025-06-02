import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return ( 
        <>
        <div className="flex justify-between" >
        <h1 className="bg-amber-950 text-white px-1 py" >agenda de emails</h1>
        <BarradePesquisa />
        </div>
        </>
     );
}
 
export default Title;