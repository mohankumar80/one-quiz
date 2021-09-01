import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="Home ">
            <h2 className="font-serif text-7xl my-12">welcome to one quiz .</h2>
            <Link to="/quizzes" className="bg-blue-500 text-white p-4 rounded hover:bg-blue-800 text-lg">
                let's begin
            </Link>
        </div>
    )
}
