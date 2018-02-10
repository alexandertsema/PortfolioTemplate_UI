import { INode } from 'app/models/node';

export interface IEdge {
    node: INode,
    minDist: number,
    maxDist: number
}
