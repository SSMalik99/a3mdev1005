import { useAuthValue } from "../../Auth/UserContext"



const Profile = () => {
    const auth = useAuthValue()
console.log(auth.currentUser)
    return <>
    <div>
        <h3>Profile</h3>
    </div>

    <div className="p-5">
        <div className="card">
            <div></div>
        </div>
    </div>
    </>
}

export default Profile