
import { firebaseDb } from "../../Firebase"
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";



const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const query = ref(firebaseDb, "users");

        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            if (snapshot.exists()) {
                Object.values(data).map((user) => {
                    setUsers((users) => [...users, user]);
                });
            }
        });
    }, [])
    return <>User</>
}

export default User