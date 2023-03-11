import { NavLink } from "react-router-dom"


const Home = () => {
    return <>
        <div className="container">
            <div className="d-flex justify-content-center p-3 mt-5">
                <div>
                    <h3>Welcome to our React web application assignment.</h3>

                    <p className="text-center mt-3">
                        This application is design and developed by <br/>
                        <b>Amandeep Kaur </b> and <b>Saravjeet Singh.</b> <br/>
                        Click to <NavLink to={"/register"}>Register</NavLink> or
                        <NavLink to={"/auth"}>Login</NavLink>to access our platform
                    </p>
                </div>

            </div>
        </div>
        
    </>
}

export default Home