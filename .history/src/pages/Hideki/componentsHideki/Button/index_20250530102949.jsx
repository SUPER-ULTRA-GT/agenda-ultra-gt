const Button = () => {
    return (
        <button
            className="mt-8 bg-red-800 py-2 px-5 rounded-3xl font-bold text-white active:bg-red-700 cursor-pointer active:scale-95"
        >
            {texto}
        </button>
    );
}

export default Button;