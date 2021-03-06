import styled from 'styled-components'

export const Container = styled.div<{ left: number, top: number, size: number, position: number }>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;

    position: relative;
    left: ${props => props.left}px;
    top: ${props => props.top}px;

    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.position}px;
`;

export const Name = styled.p<{ name: string }>`
    color: #fff;
    position: relative;
    bottom: 19px;
`;