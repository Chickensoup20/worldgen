import type { mat4 } from 'gl-matrix';
import type { Vector } from '../math/index.js';
import type { Color } from '../util/index.js';
import { Vertex } from './Vertex.js';
export declare class Quad {
    v1: Vertex;
    v2: Vertex;
    v3: Vertex;
    v4: Vertex;
    constructor(v1: Vertex, v2: Vertex, v3: Vertex, v4: Vertex);
    vertices(): Vertex[];
    forEach(fn: (v: Vertex) => void): this;
    transform(transformation: mat4): this;
    normal(): Vector;
    reverse(): this;
    setColor(color: Color): this;
    setTexture(texture: number[]): this;
    toString(): string;
    static fromPoints(p1: Vector, p2: Vector, p3: Vector, p4: Vector): Quad;
}
//# sourceMappingURL=Quad.d.ts.map