import { LocalAuth } from '../../Firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'



// register screen for the users
const Register = () => {
    const [error, setError] = useState("")
    const [informatioin, setInformation] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const validateCred= () => {

        
        if (email === "") {
            
            setError("Email is required")
            return false
        }

        if (password === '') {
            setError("Password is required")
            return false
        }

        if (confirmPassword === '') {
            setError("Confirm Password is required")
            return false
        }

        if (password !== confirmPassword) {
            setError('Passwords does not match')
            return false
        }

        

        return true
    }


    const register = event => {

        event.preventDefault()
        
        // empty the previous error message
        setError('')
        

        if (validateCred()) {
            // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(LocalAuth, email, password)
                .then((res) => {
                    if(name !== "") {
                        updateProfile(res.user, {
                            displayName : name
                        }).then(() => {

                            // show output to the users
                            setInformation("You are registered successfully, You can login now")

                        }).catch((err) => {
                            setError(err)
                        })
                    }
                    
                    
                })
                .catch(err => {
                    setError(err.message)
                })
        }
        
        // set empty message 
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }


    return <>

        <div className='text-center mt-5'>
            <h3>A3_MDEV1005 Register</h3>
        </div>
        <div className="d-flex justify-content-center mt-5">
            
            <form
                className="w-50"
                onSubmit={event => register(event)}
                >
                    {error && (
                        <p className="text-danger"> {error} </p>)
                    }

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter full Name</label>
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }}
                    value={name}
                    required
                     className="form-control" type="text" id="name" name="name" />
                </div>
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

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input required onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }} value={confirmPassword} className="form-control" id="confirmPassword" type="password" name="confirmPassword" />
                </div>

                {informatioin && (
                        <p className="text-success"> {informatioin} </p>)
                    }

            <div> Go to<NavLink to={"/auth"}>Login</NavLink> <b>OR</b> <NavLink to={"/"}>Home</NavLink> </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                
                
            </form>

        </div>
    </>
}

export default Register