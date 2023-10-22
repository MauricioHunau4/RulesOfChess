import kingSound from '../assets/king.mp3';
import pawnSound from '../assets/pawn.mp3';
import knightSound from '../assets/knight.mp3';
import queenSound from '../assets/queen.mp3';
import bishopSound from '../assets/bishop.mp3';
import rookSound from '../assets/rook.mp3';
import { Howl } from 'howler';

export const king = new Howl({
    src: [kingSound],
    volume: 0.8,
    loop: false,
    html5: true,
})

export const pawn = new Howl({
    src: [pawnSound],
    volume: 0.8,
    loop: false,
    html5: true,
})

export const knight = new Howl({
    src: [knightSound],
    volume: 0.8,
    loop: false,
    html5: true,
})

export const queen = new Howl({
    src: [queenSound],
    volume: 0.8,
    loop: false,
    html5: true,
})

export const bishop = new Howl({
    src: [bishopSound],
    volume: 0.8,
    loop: false,
    html5: true,
})

export const rook = new Howl({
    src: [rookSound],
    volume: 0.8,
    loop: false,
    html5: true,
})