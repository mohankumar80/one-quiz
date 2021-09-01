import { Link } from 'react-router-dom';
import { useData } from '../context/data-context'

export default function Results() {

    const { state: { finalScore } } = useData();

    return (
        <div className="Results flex flex-col justify-center items-center">
            <div className="max-w-xs border m-4 shadow-lg py-8 pb-16 rounded-lg p-24">
                <h3 className="text-3xl mb-6 font-black">Score</h3>
                <p><span className="text-6xl border px-8 py-2 rounded-full shadow-sm">{ finalScore }</span></p>
            </div>
            <Link to="/" className="bg-blue-500 w-20 text-white py-2 rounded-lg"> home </Link>
        </div>
    )
}
