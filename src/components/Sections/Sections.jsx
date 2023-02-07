import Categories from "../Categories/Categories";
import { Link } from "react-router-dom";

const Sections = () => {
    return (
        <>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <Categories />
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
        </>
    );
}

export default Sections;