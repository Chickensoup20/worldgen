import { NbtCompound } from '../../nbt/index.js';
import type { Color } from '../../util/index.js';
import { Identifier } from '../Identifier.js';
import { ItemStack } from '../ItemStack.js';
import { Registry } from '../Registry.js';
import { MobEffectInstance } from './MobEffectInstance.js';
export interface Potion {
    readonly id: Identifier;
    readonly name: string;
    readonly effects: MobEffectInstance[];
}
export declare namespace Potion {
    const REGISTRY: Registry<Potion>;
    function fromNbt(potion: ItemStack | NbtCompound): Potion;
    function getAllEffects(arg: Potion | ItemStack | NbtCompound): MobEffectInstance[];
    function getAllAttributeModifiers(arg: Potion | ItemStack | NbtCompound): [import("./Attribute.js").Attribute, import("./AttributeModifier.js").AttributeModifier][];
    function getColor(arg: Potion | ItemStack | NbtCompound): Color;
}
export declare namespace Potions {
    const EMPTY: Potion;
    const WATER: Potion;
    const MUNDANE: Potion;
    const THICK: Potion;
    const AWKWARD: Potion;
    const NIGHT_VISION: Potion;
    const LONG_NIGHT_VISION: Potion;
    const INVISIBILITY: Potion;
    const LONG_INVISIBILITY: Potion;
    const LEAPING: Potion;
    const LONG_LEAPING: Potion;
    const STRONG_LEAPING: Potion;
    const FIRE_RESISTANCE: Potion;
    const LONG_FIRE_RESISTANCE: Potion;
    const SWIFTNESS: Potion;
    const LONG_SWIFTNESS: Potion;
    const STRONG_SWIFTNESS: Potion;
    const SLOWNESS: Potion;
    const LONG_SLOWNESS: Potion;
    const STRONG_SLOWNESS: Potion;
    const TURTLE_MASTER: Potion;
    const LONG_TURTLE_MASTER: Potion;
    const STRONG_TURTLE_MASTER: Potion;
    const WATER_BREATHING: Potion;
    const LONG_WATER_BREATHING: Potion;
    const HEALING: Potion;
    const STRONG_HEALING: Potion;
    const HARMING: Potion;
    const STRONG_HARMING: Potion;
    const POISON: Potion;
    const LONG_POISON: Potion;
    const STRONG_POISON: Potion;
    const REGENERATION: Potion;
    const LONG_REGENERATION: Potion;
    const STRONG_REGENERATION: Potion;
    const STRENGTH: Potion;
    const LONG_STRENGTH: Potion;
    const STRONG_STRENGTH: Potion;
    const WEAKNESS: Potion;
    const LONG_WEAKNESS: Potion;
    const LUCK: Potion;
    const SLOW_FALLING: Potion;
    const LONG_SLOW_FALLING: Potion;
}
//# sourceMappingURL=Potion.d.ts.map