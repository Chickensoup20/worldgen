import type { NbtTag } from '../nbt/index.js';
import { Identifier } from './index.js';
import { Registry } from './Registry.js';
export declare class Item {
    components: Map<string, NbtTag>;
    static REGISTRY: Registry<Item>;
    constructor(components?: Map<string, NbtTag>);
    getComponent<T>(key: string | Identifier, reader: (tag: NbtTag) => T): T | undefined;
    hasComponent(key: string | Identifier): boolean;
}
//# sourceMappingURL=Item.d.ts.map