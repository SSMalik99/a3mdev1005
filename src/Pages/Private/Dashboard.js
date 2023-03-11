import { Outlet } from "react-router-dom"
import Sidebar from "../../Components/Sidebar"
import "../../Assets/css/Dashboard.css"

const Dashboard = () => {
    
    return <>
        
        <Sidebar />

        <div className="content">
            <Outlet />
            
        </div>
        
    </>
}

export default Dashboard