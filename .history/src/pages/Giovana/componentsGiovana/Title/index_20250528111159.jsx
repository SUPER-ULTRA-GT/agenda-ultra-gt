import BarradePesquisa from "../BarradePesquisa";

const Title = () => {
    return (
        <>
        <div className="flex justify-between py-4 px-5 bg-blue text-">
            <h1>Agenda de Números</h1>
            <BarradePesquisa />
        </div>
        </>
    )
}
export default Title;