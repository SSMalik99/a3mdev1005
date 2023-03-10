import React, { useEffect, useState } from "react"

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
import { AuthProvider } from "../../Auth/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { LocalAuth } from "../../Firebase";


const Main = () => {

    const [currentUser, setCurrentUser] = useState(null)


    useEffect(() => {
        onAuthStateChanged(LocalAuth, (user) => {
          setCurrentUser(user)
         })
      }, [])


    return (
        <main className=" ">
            
            <BrowserRouter>
            
            
            {/* <Sidebar/> */}
            
            
            {/* Client side navigation */}
            {/* <PublicNav /> */}
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="register" element={<Register />} />
                
                <Route path="auth" element={<Login />} >
                    <AuthProvider value={{currentUser}}>
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='calculator' element={<Calculator />} />
                        <Route path='currency' element={<Currency />} />
                        <Route path="weather" element={<Weather />} />
                        <Route path="notes" element={<Notes/>} />
                        <Route path="news" element={<News />} />
                        <Route path="users" element={<User />} />
                    </AuthProvider>
                </Route>
            </Routes>
            </BrowserRouter>
        </main>
    )

}

export default Main