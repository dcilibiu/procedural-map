import Node from './node';
import {
    TILE_SIDES,
    TILE_RADIUS,
    MAP_SMALL,
    MAP_MEDIUM,
    MAP_BIG
} from './../config';

export default {
    initialize,
    getNodesList
};

let nodes = [];

function initialize() {
    generateNodes();
}

function getNodesList() {
    return nodes;
}

function inVicinity(px, pz, node) {
    let x = px - node.x;
    let z = pz - node.z;
    let d = (node.radius || 0) + TILE_RADIUS;

    if (x * x + z * z <= d * d) {
        return true;
    }

    return false;
}

function pointInCircle(x, y, cx, cy, radius) {
  var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
  return distancesquared <= radius * radius;
}

function generateNodes() {
    nodes = MAP_MEDIUM.map(node => Object.assign({}, node));
/*
    let queue = [];
    let id = 0;
    let index = 0;

    queue.push(new Node({id, x: 0, z: 0, radius: TILE_RADIUS}));

    let meh = 275;

    while (nodes.length < meh) {
        let node = queue[index];

        for (let i = 0; i < TILE_SIDES; i++) {
            if (!node) continue;
            let x = node.x + (TILE_RADIUS * 2 - 1.6) * Math.cos(2 * Math.PI * i / TILE_SIDES);
            let z = node.z + (TILE_RADIUS * 2 - 1.6) * Math.sin(2 * Math.PI * i / TILE_SIDES);

            let exists = queue.filter(n =>  pointInCircle(x,z, n.x, n.z, TILE_RADIUS));

            if (exists.length === 0) {
                if (queue.length >= meh) {
                    continue;
                }

                id++;
                let newNode = new Node({id, x, z, radius: TILE_RADIUS});
                queue.push(newNode);

            
                node.neighbours.push(newNode.id);
                continue;
            }

            node.neighbours.push(exists[0].id);        
            
        }

        nodes.push(queue[index]);
        index++;
    }*/
}