import { mat4 } from 'gl-matrix';
export declare class PoseStack {
    private readonly stack;
    get last(): mat4;
    push(): void;
    pop(): void;
    clear(): void;
    translate(x: number, y: number, z: number): void;
    scale(x: number, y: number, z: number): void;
}
//# sourceMappingURL=PoseStack.d.ts.map