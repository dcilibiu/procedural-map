import * as THREE from './../lib/three';

import Grid from './grid/grid';

import Tile from './objects/tile';
import Tree from './objects/tree';

const OrbitControls = require('three-orbit-controls')(THREE);

let GUI;
let tree;
let MapInstance;
let renderer, scene, camera, controls;
let raycaster, mouse;


let tiles = [];


/*function createTree() {
    tree = new Tree();
    tree.position.y = 50;
    scene.add(tree);
}*/

function createScene() {
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(20, 20, 170);

    controls = new OrbitControls(camera);

	let light = new THREE.HemisphereLight( 0xeeeeee, 0x888888, 1 );
	light.position.set( 0, 20, 0 );
	scene.add( light );    

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    document.addEventListener( 'mouseup', onDocumentMouseDown, false );
    document.body.appendChild( renderer.domElement );
}

function onDocumentMouseDown(event) {
    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );

    let intersects = raycaster.intersectObjects( scene.children );
    console.log(intersects[0], intersects[0].object, intersects[0].object.userData, intersects[0].object.userData.neighbours);
    let ids = intersects[0].object.userData.neighbours;
    console.log(ids);
    tiles.forEach(tile => {
        console.log(ids, tile.userData.id);
        if (ids.includes(tile.userData.id)) {
            tile.material.color.setHex(0xffffff);
        }
    });
}

function createGrid() {
    Grid.initialize();
    Grid.getNodesList().forEach(node => {
        let tile = new Tile(node);
        tiles.push(tile);
        scene.add(tile);
    });

  /*  console.log(Grid.getNodesList().length);
    console.log(JSON.stringify(Grid.getNodesList()));*/
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

function init() {
    createScene();
    createGrid();

    animate();
}

init();