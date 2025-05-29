const AddButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[30px] h-[30px] text-black font-extrabold text-2xl rounded-md hover:bg-gray-300"
    >
        +
    </button>
);

export default AddButton;