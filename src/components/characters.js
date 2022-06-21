
import './characters.css'

function Characters (props) {
    let {name, desc, image} = props;
    return (
        <div className={'character'}>
            <div className={'text'}>
                <h2 className={'title'}>{name}</h2>
                <p className={'description'}>{desc}</p>
            </div>
            <img className={'img'} src={image} alt={'character'}></img>
        </div>
    )
}


export default Characters;