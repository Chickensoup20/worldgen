import type { NbtCompound } from '../../nbt/index.js';
import type { Color } from '../../util/index.js';
import { MobEffect } from './MobEffect.js';
export interface MobEffectInstance {
    readonly effect: MobEffect;
    readonly duration: number;
    readonly amplifier: number;
    readonly ambient: boolean;
    readonly visible: boolean;
    readonly showIcon: boolean;
}
export declare namespace MobEffectInstance {
    function create(effect: MobEffect, duration?: number, amplifier?: number, ambient?: boolean, visible?: boolean, showIcon?: boolean): MobEffectInstance;
    function fromNbt(tag: NbtCompound): MobEffectInstance | undefined;
    function getColor(effects: MobEffectInstance[]): Color;
    function formatDuration(effect: MobEffectInstance): string;
}
//# sourceMappingURL=MobEffectInstance.d.ts.map