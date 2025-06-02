import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return (
        <>
        <div className="flex justify-between py-4 px-5 bg-purple-600 text-white text-xl px-4 py-2 ">
            <h1 > Agenda de Números </h1>
            <BarradePesquisa />
        </div>
        </>
    )
}
export default Title;