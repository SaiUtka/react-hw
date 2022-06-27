
export default function UserDetails({user}) {
    return (
        <div>
            <h3>{user.name}</h3>
            <div>{user.address.city}</div>
            <div>{user.address.street}</div>

        </div>
    );

};