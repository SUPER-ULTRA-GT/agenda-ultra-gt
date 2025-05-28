import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return (
        <>
        <div className="flex justify-between items-center py-4 px-5 bg-purple-600 text-white  ">
            <h1 className="font" > Agenda de Números </h1>
            <BarradePesquisa />
        </div>
        </>
    )
}
export default Title;