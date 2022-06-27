
export default function User({item, getDetails}) {
    return (
        <div>
            <h3>{item.id}</h3>
            <h3>{item.name}</h3>
            <button onClick={() => getDetails(item)}>details</button>
        </div>
    );

};