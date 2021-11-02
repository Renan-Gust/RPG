import { useState } from "react"

import { mapSpots } from "../data/mapSpots"
import { CharacterSides } from "../types/CharacterSides"

export function useCharacter() {
    const [position, setPosition] = useState({ x: 3, y: 5 })
    const [side, setSide] = useState<CharacterSides>('down')

    function moveLeft() {
        setPosition(pos => ({
            x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
            y: pos.y
        }))

        setSide('left')
    }

    function moveRight() {
        setPosition(pos => ({
            x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
            y: pos.y
        }))

        setSide('right')
    }

    function moveUp() {
        setPosition(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y
        }))

        setSide('up')
    }
    
    function moveDown() {
        setPosition(pos => ({
            x: pos.x,
            y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y
        }))

        setSide('down')
    }

    function canMove(x: number, y: number) {
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
            if(mapSpots[y][x] === 1) return true
        }

        return false
    }

    return{
        x: position.x,
        y: position.y,
        side,
        moveLeft,
        moveRight,
        moveUp,
        moveDown
    }
}