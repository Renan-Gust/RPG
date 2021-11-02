import { CharacterSides } from '../../types/CharacterSides'
import * as C from './styles'

type PositionProps = {
    x: number;
    y: number;
    side: CharacterSides;
}

export const Character = ({ x, y, side }: PositionProps) => {
    const size = 30

    const sides = {
        left: -30,
        right: -60,
        up: -90,
        down: 0
    }

    return(
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            position={sides[side] ?? 0}
        >
            
        </C.Container>
    )
}