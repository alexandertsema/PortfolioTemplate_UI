import { IEdge } from "app/models/edge";
import { INode } from "app/models/node";

export let mockSkill = [];//new Map<INode, IEdge[]>();

let cSharpNode = {
    id: 1,
    name: "C#",
    skillLevel: {
        id: 1,
        name: "expert"
    },
    direction: {
        x: 15,
        y: 15
    },
    current: {
        x: 10,
        y: 10
    },
    velocity: 5,
    mass: 10,
    radius: 2
};
let pythonNode = {
    id: 2,
    name: "Python",
    skillLevel: {
        id: 1,
        name: "expert"
    },
    direction: {
        x: -5,
        y: 10
    },
    current: {
        x: 8,
        y: 3
    },
    velocity: 5,
    mass: 10,
    radius: 2
};

let languageCategoryNode = {
    id: 1,
    name: "LANGUAGES",
    direction: {
        x: -5,
        y: 10
    },
    current: {
        x: 8,
        y: 3
    },
    velocity: 5,
    mass: 10,
    radius: 2
};

// mockSkill.push({
//     node:   cSharpNode,
//     edges: [{ node: languageCategoryNode, minDist: 2, maxDist: 3 }]
// });
// mockSkill.push({
//     node:   pythonNode,
//     edges: [{ node: languageCategoryNode, minDist: 2, maxDist: 3 }]
// });

mockSkill.push({
    node: cSharpNode, 
    edges: [{ node: languageCategoryNode, minDist: 2, maxDist: 3 }]});
mockSkill.push({
    node: pythonNode,
    edges: [{ node: languageCategoryNode, minDist: 2, maxDist: 3 }]});
