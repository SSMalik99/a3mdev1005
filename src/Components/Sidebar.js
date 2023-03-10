import { NavLink } from "react-router-dom"

const Sidebar = () => {

    return <div className="h-100">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={
            {"width": "280px"}
            }>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                
                <span className="fs-4">Sidebar</span>
            </a>
                <ul className="nav nav-pills flex-column mb-auto">
                    {/* <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                            <svg className="bi me-2" width="16" height="16"><use xlink:href="#home" /></svg>
                            Home
                        </a>
                    </li> */}
                    <li>
                        <NavLink to={"/dashboard"} >
                            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#speedometer2" /></svg> */}
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/users"}className="nav-link text-white">
                            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#table" /></svg> */}
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/weather"} className="nav-link text-white">
                            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid" /></svg> */}
                            Weather
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/currency"} className="nav-link text-white">
                            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid" /></svg> */}
                            Currency
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/calculator"} className="nav-link text-white">
                            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid" /></svg> */}
                            Calculator
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/news"} className="nav-link text-white">
                            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid" /></svg> */}
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Weather"} className="nav-link text-white">
                            {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid" /></svg> */}
                            Notes
                        </NavLink>
                    </li>
                </ul>
                
        </div>
            </div>

}

export default Sidebar