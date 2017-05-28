import {
    TILE_SIDES,
    TILE_RADIUS
} from './../config';

import {
    CylinderGeometry,
    Mesh,
    MeshBasicMaterial
} from '../../lib/three';

class Tile extends Mesh {
    constructor({id, neighbours, x, z}) {
        super();

        this.geometry = new CylinderGeometry( TILE_RADIUS, TILE_RADIUS, 2, TILE_SIDES);
        this.material = new MeshBasicMaterial( {color: ('#'+Math.random().toString(16).substr(-6))} );

        this.userData.id = id;
        this.userData.neighbours = [...neighbours];

        this.position.x = x;
        this.position.y = 0;
        this.position.z = z;
    }
}

export default Tile;