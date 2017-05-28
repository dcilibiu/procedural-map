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

function generateNodes() {
    nodes = MAP_MEDIUM.map(node => Object.assign({}, node));
}