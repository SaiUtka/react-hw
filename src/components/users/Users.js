import {useEffect, useState} from "react";
import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";

export default function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))

    }, []);

    const getDetails = (item) => {
        setUser(item)

    }

    return (
        <div>

            {
                user && <UserDetails
                    user={user}
                />
            }
            {
                users.map(user => <User
                    key={user.id}
                    item={user}
                    getDetails={getDetails}
                />)
            }

        </div>
    );

};