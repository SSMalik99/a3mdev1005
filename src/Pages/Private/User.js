
import { firebaseDb } from "../../Firebase"
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";


// users screen on dashboard page
const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // users query
        const query = ref(firebaseDb, "users");

        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            
        });
        // TODO: Change firebase auth to admin auth and try agian
    }, [])
    return <>
        <h3>Users</h3>
        <hr/>
        <div className="alert alert-danger">You don't have proper access to get users.<br/> Register issue: <a href = "mailto: saravjeetsingh.malik@gmail.com">SaravAman</a></div>
    </>
}

export default User