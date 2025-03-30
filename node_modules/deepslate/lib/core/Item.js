import { Identifier } from './index.js';
import { Registry } from './Registry.js';
export class Item {
    components;
    static REGISTRY = Registry.createAndRegister('item');
    constructor(components = new Map()) {
        this.components = components;
    }
    getComponent(key, reader) {
        if (typeof key === 'string') {
            key = Identifier.parse(key);
        }
        const value = this.components.get(key.toString());
        if (value) {
            return reader(value);
        }
        return undefined;
    }
    hasComponent(key) {
        if (typeof key === 'string') {
            key = Identifier.parse(key);
        }
        return this.components.has(key.toString());
    }
}
//# sourceMappingURL=Item.js.map