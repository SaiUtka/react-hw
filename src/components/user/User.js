
export default function User({item, getUserId}) {
    return (
        <div>
            <h3>id:{item.id} {item.name}</h3>
            <button onClick={() => getUserId(item.id)
            }>posts</button>
        </div>

    );

};