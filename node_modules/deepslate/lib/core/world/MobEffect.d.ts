import type { Color } from '../../util/index.js';
import { Identifier } from '../Identifier.js';
import { Registry } from '../Registry.js';
import type { Attribute } from './Attribute.js';
import type { AttributeModifier } from './AttributeModifier.js';
export declare type MobEffectCategory = 'beneficial' | 'harmful' | 'neutral';
export interface MobEffect {
    readonly index: number;
    readonly id: Identifier;
    readonly category: MobEffectCategory;
    readonly color: Color;
    readonly modifiers: Map<Attribute, AttributeModifier>;
}
export declare namespace MobEffect {
    const REGISTRY: Registry<MobEffect>;
    function fromId(n: number): MobEffect | undefined;
}
export declare namespace MobEffects {
    const SPEED: MobEffect;
    const SLOWNESS: MobEffect;
    const HASTE: MobEffect;
    const MINING_FATIGUE: MobEffect;
    const STRENGTH: MobEffect;
    const INSTANT_HEALTH: MobEffect;
    const INSTANT_DAMAGE: MobEffect;
    const JUMP_BOOST: MobEffect;
    const NAUSEA: MobEffect;
    const REGENERATION: MobEffect;
    const RESISTANCE: MobEffect;
    const FIRE_RESISTANCE: MobEffect;
    const WATER_BREATHING: MobEffect;
    const INVISIBILITY: MobEffect;
    const BLINDNESS: MobEffect;
    const NIGHT_VISION: MobEffect;
    const HUNGER: MobEffect;
    const WEAKNESS: MobEffect;
    const POISON: MobEffect;
    const WITHER: MobEffect;
    const HEALTH_BOOST: MobEffect;
    const ABSORPTION: MobEffect;
    const SATURATION: MobEffect;
    const GLOWING: MobEffect;
    const LEVITATION: MobEffect;
    const LUCK: MobEffect;
    const UNLUCK: MobEffect;
    const SLOW_FALLING: MobEffect;
    const CONDUIT_POWER: MobEffect;
    const DOLPHINS_GRACE: MobEffect;
    const BAD_OMEN: MobEffect;
    const HERO_OF_THE_VILLAGE: MobEffect;
    const DARKNESS: MobEffect;
}
//# sourceMappingURL=MobEffect.d.ts.map