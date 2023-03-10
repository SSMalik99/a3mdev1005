import React from "react"

import Sidebar from "../../Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Calculator from "../Private/Calculator";
import Dashboard from "../Private/Dashboard";
import Currency from "../Private/Currency";
import Weather from "../Private/Weather";
import Notes from "../Private/Notes";
import News from "../Private/News";
import User from "../Private/User";
import PublicNav from "../../Components/PublicNav";


const Main = () => {

    


    return (
        <main className=" ">
            
            <BrowserRouter>
            
            
            {/* <Sidebar/> */}
            
            
            {/* Client side navigation */}
            <PublicNav />
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="register" element={<Register />} />
                
                <Route path="login" element={<Login />} >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='calculator' element={<Calculator />} />
                    <Route path='currency' element={<Currency />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="notes" element={<Notes/>} />
                    <Route path="news" element={<News />} />
                    <Route path="users" element={<User />} />
                </Route>
            </Routes>
            </BrowserRouter>
        </main>
    )

}

export default Main