import { Actor, Vector, CompositeCollider, CollisionType, Shape } from 'excalibur';

export class GroupedColliders extends Actor {
    onInitialize(engine) {
        let landscape = new CompositeCollider([
            Shape.Edge(new Vector(-1400, -200), new Vector(-1000, -600)),
            Shape.Edge(new Vector(-1000, -600), new Vector(-400, -1000)),
            Shape.Edge(new Vector(-400, -1000), new Vector(0, -1000)),
            Shape.Edge(new Vector(0, -1000), new Vector(400, -1000)),
            Shape.Edge(new Vector(400, -1000), new Vector(1000, -600)),
            Shape.Edge(new Vector(1000, -600), new Vector(1400, -200)),
            Shape.Edge(new Vector(1400, -200), new Vector(1000, 200)),
            Shape.Edge(new Vector(1000, 200), new Vector(400, 600)),
            Shape.Edge(new Vector(400, 600), new Vector(0, 600)),
            Shape.Edge(new Vector(0, 600), new Vector(-400, 600)),
            Shape.Edge(new Vector(-400, 600), new Vector(-1000, 200)),
            Shape.Edge(new Vector(-1000, 200), new Vector(-1400, -200))
        ]);

        this.body.collisionType = CollisionType.Fixed;
        this.collider.set(landscape);
        this.pos = new Vector(720, 650);
    }
}
