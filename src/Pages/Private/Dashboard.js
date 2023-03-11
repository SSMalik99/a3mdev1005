import { Outlet } from "react-router-dom"
import Sidebar from "../../Components/Sidebar"
import "../../Assets/css/Dashboard.css"

const Dashboard = () => {
    // dashboard screen to show private screens to the users
    return <>
        
        <Sidebar />

        <div className="content">
            <Outlet />
            
        </div>
        
    </>
}

export default Dashboard