class Node {
    constructor({x = 0, z = 0, y = 0, id = 0, radius = 1}) {
        this.id = id;
        this.x = x;
        this.z = z;
        this.y = y;
        this.radius = radius;

        this.neighbours = [];
    }
}

export default Node;