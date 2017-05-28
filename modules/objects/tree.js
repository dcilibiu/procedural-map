import {
    MeshBasicMaterial,
    Mesh,
    SphereGeometry,
    CylinderGeometry,
    Group,
} from '../../lib/three';

class Tree extends Group {
    constructor() {
        super();

        this.trunk = this.getTrunk();
        this.crown = this.getCrown();

        this.crown.position.y  = 5;

        this.add(this.trunk);
        this.add(this.crown);
    }

    getCrown() {
        let geometry = new SphereGeometry( 4, 10, 10 );
        let material = new MeshBasicMaterial( {color: 0x4a8314} );
        
        return new Mesh(geometry, material);
    }

    getTrunk() {
        var geometry = new CylinderGeometry( 1, 1, 5, 4 );
        var material = new MeshBasicMaterial( {color: 0xc99f1c} );

        return new Mesh(geometry, material);
    }
}

export default Tree;
