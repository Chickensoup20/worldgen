import express, { text } from 'express';
import fs from 'fs';
import { loadCustomDataPack, applyDatapackData } from './dataLoader.js';
import {
  NoiseSettings, WorldgenRegistries, Chunk, NoiseGeneratorSettings,
  BlockState, NoiseRouter, DensityFunction, RandomState,
  Identifier, NoiseChunkGenerator, ChunkPos, BlockPos,
  BiomeSource,
  Registry
} from 'deepslate';

const app = express();
const port = 5000;

app.use(express.json());

app.post('/chunk', (req, res) => {
  console.log('Received request:', req.body); // Debugging log

  const { xOffset, zOffset } = req.body;

  if (typeof xOffset !== 'number' || typeof zOffset !== 'number') {
    return res.status(400).json({ error: 'xOffset and zOffset must be numbers' });
  }

  const blocks = [];

  const settings = WorldgenRegistries.NOISE_SETTINGS.getOrThrow(Identifier.create("overworld"))


  const randomState = new RandomState(settings, BigInt(1))
  const generator = new NoiseChunkGenerator(null, settings)
  for (let chunkX = xOffset; chunkX < xOffset + 100; chunkX += 16) {
    for (let chunkZ = zOffset; chunkZ < zOffset + 100; chunkZ += 16) {
      const chunk = new Chunk(-64, 256, ChunkPos.create(Math.ceil(chunkX / 16), Math.ceil(chunkZ / 16)));


      generator.fill(randomState, chunk, false);
      generator.buildSurface(randomState, chunk);




      for (let x = chunkX / 16; x < (chunkX / 16 + 16); x++) {
        for (let z = chunkZ / 16; z < (chunkZ / 16 + 16); z++) {
          let stripBlocks = ""
          for (let y = -64; y < 256; y++) {
            stripBlocks = stripBlocks + chunk.getBlockState(BlockPos.create(x, y, z)).getName().path + ","


          }
          blocks.push(stripBlocks);
        }
      }
    }
  }
  res.json(blocks); // ✅ Final response
});

app.listen(port, '0.0.0.0', () => {

  console.log(`Server running at http://0.0.0.0:5000`);
  (async () => {
    // Path to the datapack folder, e.g., "minecraft-data"
    const datapackPath = './minecraft-data';
    // The categories you want to load from the datapack
    const categories = [
      'worldgen/noise_settings',
      'worldgen/noise',
      'worldgen/density_function'
    ];

    try {
      // Call loadDatapack and wait for the project data to be returned
      const projectData = await loadCustomDataPack(datapackPath, categories);
      applyDatapackData(projectData)
      console.log(WorldgenRegistries.DENSITY_FUNCTION.keys());
    } catch (error) {
      console.error('Error loading datapack:', error);
    }
  })();

});






