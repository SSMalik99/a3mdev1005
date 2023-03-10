import { NavLink } from "react-router-dom";

// PUBLIC nav : NOT USed
const PublicNav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <NavLink className="navbar-brand" to={"/"}>A3-M1005</NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/"}>Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/auth"}>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/register"}>Register</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default PublicNav