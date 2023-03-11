import { useAuthValue } from "../../Auth/UserContext"



// Show prfoile information on dashboard screen
const Profile = () => {
    const auth = useAuthValue() // get current user
    const currentUser = auth.currentUser
    // console.log(localApp())
    return <>
    <div>
        <h3>Profile</h3>
    </div>

    <div className="p-5">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Personal Information</h5>
                <div className="card-body">
                    <div>
                        <span>
                            <b>Name: </b>
                        </span>
                        <span>
                            {currentUser.displayName}
                        </span>
                    </div>

                    <div>
                        <span>
                            <b>Email: </b>
                        </span>
                        <span>
                            {currentUser.email}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Profile