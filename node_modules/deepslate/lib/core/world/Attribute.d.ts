import { Identifier } from '../Identifier.js';
import { Registry } from '../Registry.js';
export interface Attribute {
    readonly id: Identifier;
    readonly defaultValue: number;
    readonly minValue: number;
    readonly maxValue: number;
}
export declare namespace Attribute {
    const REGISTRY: Registry<Attribute>;
}
export declare namespace Attributes {
    const MAX_HEALTH: Attribute;
    const FOLLOW_RANGE: Attribute;
    const KNOCKBACK_RESISTANCE: Attribute;
    const MOVEMENT_SPEED: Attribute;
    const FLYING_SPEED: Attribute;
    const ATTACK_DAMAGE: Attribute;
    const ATTACK_KNOCKBACK: Attribute;
    const ATTACK_SPEED: Attribute;
    const ARMOR: Attribute;
    const ARMOR_TOUGHNESS: Attribute;
    const LUCK: Attribute;
    const SPAWN_REINFORCEMENTS: Attribute;
    const JUMP_STRENGTH: Attribute;
}
//# sourceMappingURL=Attribute.d.ts.map