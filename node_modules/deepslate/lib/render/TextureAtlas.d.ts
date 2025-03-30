import type { Identifier } from '../core/index.js';
export declare type UV = [number, number, number, number];
export interface TextureAtlasProvider {
    getTextureAtlas(): ImageData;
    getTextureUV(texture: Identifier): UV;
}
export declare class TextureAtlas implements TextureAtlasProvider {
    private readonly img;
    private readonly idMap;
    private readonly part;
    constructor(img: ImageData, idMap: Record<string, UV>);
    getTextureAtlas(): ImageData;
    getTextureUV(id: Identifier): UV;
    static fromBlobs(textures: {
        [id: string]: Blob;
    }): Promise<TextureAtlas>;
    static empty(): TextureAtlas;
    private static drawInvalidTexture;
}
//# sourceMappingURL=TextureAtlas.d.ts.map