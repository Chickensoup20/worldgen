import type { vec3 } from 'gl-matrix';
import { mat4 } from 'gl-matrix';
import type { Identifier, StructureProvider } from '../core/index.js';
import type { BlockDefinitionProvider } from './BlockDefinition.js';
import type { BlockModelProvider } from './BlockModel.js';
import { Renderer } from './Renderer.js';
import type { TextureAtlasProvider } from './TextureAtlas.js';
export declare type BlockFlags = {
    opaque?: boolean;
    semi_transparent?: boolean;
    self_culling?: boolean;
};
export interface BlockFlagsProvider {
    getBlockFlags(id: Identifier): BlockFlags | null;
}
export interface BlockPropertiesProvider {
    getBlockProperties(id: Identifier): Record<string, string[]> | null;
    getDefaultBlockProperties(id: Identifier): Record<string, string> | null;
}
export interface Resources extends BlockDefinitionProvider, BlockModelProvider, TextureAtlasProvider, BlockFlagsProvider, BlockPropertiesProvider {
}
interface StructureRendererOptions {
    facesPerBuffer?: number;
    chunkSize?: number;
    useInvisibleBlockBuffer?: boolean;
}
export declare class StructureRenderer extends Renderer {
    private structure;
    private readonly resources;
    private readonly gridShaderProgram;
    private readonly colorShaderProgram;
    private gridMesh;
    private readonly outlineMesh;
    private invisibleBlocksMesh;
    private readonly atlasTexture;
    useInvisibleBlocks: boolean;
    private readonly chunkBuilder;
    constructor(gl: WebGLRenderingContext, structure: StructureProvider, resources: Resources, options?: StructureRendererOptions);
    setStructure(structure: StructureProvider): void;
    updateStructureBuffers(chunkPositions?: vec3[]): void;
    private getGridMesh;
    private getOutlineMesh;
    private getInvisibleBlocksMesh;
    drawGrid(viewMatrix: mat4): void;
    drawInvisibleBlocks(viewMatrix: mat4): void;
    drawStructure(viewMatrix: mat4): void;
    drawColoredStructure(viewMatrix: mat4): void;
    drawOutline(viewMatrix: mat4, pos: vec3): void;
}
export {};
//# sourceMappingURL=StructureRenderer.d.ts.map