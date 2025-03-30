import { Identifier } from '../Identifier.js';
import type { ItemStack } from '../ItemStack.js';
import { Registry } from '../Registry.js';
export declare type EnchantmentRarity = 'common' | 'uncommon' | 'rare' | 'very_rare';
export declare type EnchantmentCategory = 'armor' | 'armor_feet' | 'armor_legs' | 'armor_chest' | 'armor_head' | 'weapon' | 'digger' | 'fishing_rod' | 'trident' | 'breakable' | 'bow' | 'wearable' | 'crossbow' | 'vanishable';
export interface Enchantment {
    readonly id: Identifier;
    readonly rarity: EnchantmentRarity;
    readonly category: EnchantmentCategory;
    readonly isDiscoverable: boolean;
    readonly isTradeable: boolean;
    readonly isTreasure: boolean;
    readonly isCurse: boolean;
    readonly minLevel: number;
    readonly maxLevel: number;
    readonly minCost: (lvl: number) => number;
    readonly maxCost: (lvl: number) => number;
    readonly _isCompatible: (other: Enchantment) => boolean;
    readonly _canEnchant: (item: ItemStack, next: () => boolean) => boolean;
}
export declare namespace Enchantment {
    const REGISTRY: Registry<Enchantment>;
    function isCompatible(a: Enchantment, b: Enchantment): boolean;
    function canEnchant(item: ItemStack, ench: Enchantment): boolean;
}
export declare namespace Enchantments {
    const PROTECTION: Enchantment;
    const FIRE_PROTECTION: Enchantment;
    const FEATHER_FALLING: Enchantment;
    const BLAST_PROTECTION: Enchantment;
    const PROJECTILE_PROTECTION: Enchantment;
    const RESPIRATION: Enchantment;
    const AQUA_AFFINITY: Enchantment;
    const THORNS: Enchantment;
    const DEPTH_STRIDER: Enchantment;
    const FROST_WALKER: Enchantment;
    const BINDING_CURSE: Enchantment;
    const SOUL_SPEED: Enchantment;
    const SWIFT_SNEAK: Enchantment;
    const SHARPNESS: Enchantment;
    const SMITE: Enchantment;
    const BANE_OF_ARTHROPODS: Enchantment;
    const KNOCKBACK: Enchantment;
    const FIRE_ASPECT: Enchantment;
    const LOOTING: Enchantment;
    const SWEEPING: Enchantment;
    const EFFICIENCY: Enchantment;
    const SILK_TOUCH: Enchantment;
    const UNBREAKING: Enchantment;
    const FORTUNE: Enchantment;
    const POWER: Enchantment;
    const PUNCH: Enchantment;
    const FLAME: Enchantment;
    const INFINITY: Enchantment;
    const LUCK_OF_THE_SEA: Enchantment;
    const LURE: Enchantment;
    const LOYALTY: Enchantment;
    const IMPALING: Enchantment;
    const RIPTIDE: Enchantment;
    const CHANNELING: Enchantment;
    const MULTISHOT: Enchantment;
    const QUICK_CHARGE: Enchantment;
    const PIERCING: Enchantment;
    const MENDING: Enchantment;
    const VANISHING_CURSE: Enchantment;
}
//# sourceMappingURL=Enchantment.d.ts.map