import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

export const Rows = ({id, name, email}) => {
    return ( 
            <tbody>
                <tr className="border-b-1 border-gray-200 ">
                    <td className="p-3">{name}</td>
                    <td>{email}</td>
                    <td className="flex justify-center p-4 gap-2">
                        <button>
                            <i><FaEdit/></i>
                        </button>
                        <button>
                        <i><FaRegTrashAlt/></i>
                        </button>
                    </td>
                </tr>
            </tbody>
     );
}