import { Link } from "react-router-dom"

export default function Navigation() {
    return <ul className="flex flex-row p-8 bg-blue-500">
            <li className="font-bold italic text-white text-xl md:ml-12"><Link to="/">One-Quiz</Link></li>
        </ul>
}