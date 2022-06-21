
import './App.css';
import './components/characters.css'

import Characters from "./components/characters";

function App() {
    return (
        <div className={'container'}>
            <Characters
                id={'302'}
                name={'Ruben'}
                status={'Dead'}
                species={'human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/302.jpeg'}
            />

            <Characters
                id={'304'}
                name={'Scary Brandon'}
                status={'Alive'}
                species={'Mythological Creature'}
                gender={'male'}
                image={'https://rickandmortyapi.com/api/character/avatar/304.jpeg'}
            />

            <Characters
                id={'442'}
                name={'Shaved Head Jerry'}
                status={'Alive'}
                species={'human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/442.jpeg'}
            />

            <Characters
                id={'640'}
                name={'Angry Glorzo'}
                status={'Dead'}
                species={'Alien'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/640.jpeg'}
            />

            <Characters
                id={'689'}
                name={'Scarecrow Jerry'}
                status={'Dead'}
                species={'Robot'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/689.jpeg'}
            />

            <Characters
                id={'693'}
                name={'Glockenspiel Beth'}
                status={'Dead'}
                species={'Robot'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/693.jpeg'}
            />




        </div>
    );
}

export default App;
