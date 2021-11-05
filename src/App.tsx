import { useEffect } from 'react'

import * as C from './App.styles'

import { Character } from './components/Character'
import { useCharacter } from './hooks/useCharacter'

function App() {
    const character = useCharacter('Renan')

    useEffect(() => {
        window.addEventListener('keydown', handleKeyBoard)
    }, [])

    function handleKeyBoard(e: KeyboardEvent) {
        switch (e.code) {
            case 'KeyA':
            case 'ArrowLeft':
                character.moveLeft()
            break;

            case 'KeyD':
            case 'ArrowRight':
                character.moveRight()
            break;

            case 'KeyW':
            case 'ArrowUp':
                character.moveUp()
            break;

            case 'KeyS':
            case 'ArrowDown':
                character.moveDown()
            break;
        }
    }

    return(
        <C.Container>
            <C.Map>
                <Character x={character.x} y={character.y} side={character.side} name={character.name} />
            </C.Map>
        </C.Container>
    )
}

export default App