
import './characters.css'

function Characters (props) {
    let {id, name, status, species, gender, image} = props;
    return (
        <div className={'character'}>
            <img className={'img'} src={image} alt={'character'}></img>
            <div className={'text'}>
                <div className={'title'}>
                    <h3>id: {id}</h3>
                    <h1>{name}</h1>
                </div>
                <div className={'info'}>
                    <h3>{status} - {species}</h3>
                    <h3>gender: {gender}</h3>
                </div>
            </div>

        </div>
    )
}


export default Characters;

// new task!!!!!!