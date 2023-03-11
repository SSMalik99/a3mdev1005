import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink } from "react-router-dom"

import { LocalAuth } from "../../Firebase";
import {useNavigate} from 'react-router-dom'




// Login screen for the users
const Login = () => {
  // const currentUser = useAuthValue()
  
  const [error, setError] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    // setUser({user : 1})
    event.preventDefault()
    
    // set error to none for new request
    setError("")

    // firebase method to login
    signInWithEmailAndPassword(LocalAuth, email, password)
      .then(() => {
        
          console.log("User logged in")
          // console.log(currentUser)
          // navigate to the dashboard
          navigate("/me", { replace: true })
       
      })
      .catch(err => setError(err.message))
  }


  return (
    <div className={"container p-3"}>
      <div className='text-center mt-5'>
        <h3>A3_MDEV1005 Login</h3>
      </div>
      
      {/* {user && (
        <Navigate to="/dashboard" replace={true} />
      )} */}
      <div className="d-flex justify-content-center">
        <form
          className="w-50"
          onSubmit={(event) => handleSubmit(event)}
        >
          {error && (
                        <p className="text-danger"> {error} </p>)
                    }
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                    required
                     className="form-control" type="email" id="email" name="email" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} value={password} required className="form-control" id="password" type="password" name="password" />
                </div>
          <div> Go to<NavLink to={"/register"}>Register</NavLink> <b>OR</b> <NavLink to={"/"}>Home</NavLink> </div>
          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Login