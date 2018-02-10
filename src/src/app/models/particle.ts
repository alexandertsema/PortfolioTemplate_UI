import { IPosition } from 'app/models/position';

export interface IParticle {
    direction: IPosition,
    current: IPosition,
    velocity: number,
    mass: number,
    radius: number
}
