
import './App.css';
import './components/characters.css'

import Characters from "./components/characters";

function App() {
    return (
        <div className={'container'}>
            <Characters
                name={'Homer'}
                desc={'Homer Jay Simpson is the bumbling husband of Marge, and father to Bart, Lisa and Maggie Simpson.' +
                    ' He is the son of Mona and Abraham "Grampa" Simpson.'}
                image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />

            <Characters
                name={'Marge'}
                desc={'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is a character, based on the real ' +
                    'Marge (Matt Groening\'s mom), in the American animated sitcom ' +
                    'The Simpsons and part of the eponymous family.'}
                image={'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'}
            />

            <Characters
                name={'Bart'}
                desc={'Bart Simpson is a fictional character in the American animated television series ' +
                    'The Simpsons and part of the Simpson family.'}
                image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            />

            <Characters
                name={'Lisa'}
                desc={'Lisa Marie Simpson is a fictional character in the animated television series The Simpsons. ' +
                    'She is the middle child and most accomplished of the Simpson family.'}
                image={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
            />

            <Characters
                name = {'Maggie'}
                desc = {'Margaret Evelyn Lenny "Maggie" Simpson is a fictional character in the animated television ' +
                    'series The Simpsons and a part of the Simpson family, notably the youngest member.'}
                image = {'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
            />


        </div>
    );
}

export default App;
