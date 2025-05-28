import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return (
        <>
        <div className="flex justify-between py-4 px-5 bg-purple-700 text-white text-2xl p-4 rounded">
            <h1>Agenda de Números</h1>
            <BarradePesquisa />
        </div>
        </>
    )
}
export default Title;