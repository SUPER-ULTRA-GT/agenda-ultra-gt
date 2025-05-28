import BarraDePesquisa from "../BarraDePesquisa";

const Title = () => {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Agenda de contatinhos</h1>
                <BarraDePesquisa />
            </div>
        </>
    )
}

export default Title;