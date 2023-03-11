import { NavLink } from "react-router-dom"

const Sidebar = () => {

    return <>
        <div className="mobile_nav">
            {/* <div className="nav_bar">
                <img src="1.png" className="mobile_profile_image" alt="" />
                <i className="fa fa-bars nav_btn"></i>
            </div> */}
            <div className="mobile_nav_items">
                <NavLink to={"/me"} ><i className="fas fa-desktop"></i><span>Dashboard</span></NavLink>
                <NavLink to={"/users"}><i className="fas fa-cogs"></i><span>Users</span></NavLink>

                <NavLink to={"/weather"}><i className="fas fa-table"></i><span>Weather</span></NavLink>

                <NavLink to={"/currency"} ><i className="fas fa-th"></i><span>Currency</span></NavLink>
                <NavLink to={"/calculator"} ><i className="fas fa-info-circle"></i><span>Calculator</span></NavLink>
                <NavLink to={"/news"}><i className="fas fa-sliders-h"></i><span>News</span></NavLink>

                <NavLink to={"/notes"}><i className="fas fa-th"></i>Notes</NavLink>
            </div>
        </div>
        <div className="sidebar">
            {/* <div className="profile_info">
                <img src="https://i.imgur.com/iQpdHb2.jpg" className="profile_image" alt="" />
                <h4>Williamson</h4>
            </div> */}
            <NavLink to={"/me"} ><i className="fas fa-desktop"></i><span>Dashboard</span></NavLink>
            <NavLink to={"/users"}><i className="fas fa-cogs"></i><span>Users</span></NavLink>

            <NavLink to={"/weather"}><i className="fas fa-table"></i><span>Weather</span></NavLink>

            <NavLink to={"/currency"} ><i className="fas fa-th"></i><span>Currency</span></NavLink>
            <NavLink to={"/calculator"} ><i className="fas fa-info-circle"></i><span>Calculator</span></NavLink>
            <NavLink to={"/news"}><i className="fas fa-sliders-h"></i><span>News</span></NavLink>

            <NavLink to={"/notes"}><i className="fas fa-th"></i>Notes</NavLink>
        </div>

    </>

    //                      classNameName="nav-link text-white">
    //                         {/* <svg classNameName="bi me-2" width="16" height="16"><use xlink:href="#grid" /></svg> */}
    //                         Notes
    //                     </NavLink>
}

export default Sidebar