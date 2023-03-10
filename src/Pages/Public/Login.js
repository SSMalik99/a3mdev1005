import { useState } from "react";
import { Navigate } from "react-router-dom"



const Login = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const handleSubmit = (event) => {
        // setUser({user : 1})
        event.preventDefault()
        console.log("check 1")
    }
    

    return (
        <div className={"container p-3"}>
        {error && <p>{error}</p>}
        {user && (
          <Navigate to="/dashboard" replace={true} />
        )}
        <div className="d-flex justify-content-center"> 
          <form
          className="w-50"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input className="form-control" type="email" id="email" name="email" />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
              <input className="form-control" id="password" type="password" name="password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    )
}

export default Login