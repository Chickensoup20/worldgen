import { mat4 } from 'gl-matrix';
export class PoseStack {
    stack = [mat4.create()];
    get last() {
        return this.stack[this.stack.length - 1];
    }
    push() {
        this.stack.push(mat4.clone(this.last));
    }
    pop() {
        if (this.stack.length <= 1) {
            throw new Error('Cannot pop last matrix of PoseStack');
        }
        this.stack.splice(this.stack.length - 1, 1);
    }
    clear() {
        this.stack.splice(1, this.stack.length - 1);
    }
    translate(x, y, z) {
        mat4.translate(this.last, this.last, [x, y, z]);
    }
    scale(x, y, z) {
        mat4.scale(this.last, this.last, [x, y, z]);
    }
}
//# sourceMappingURL=PoseStack.js.map