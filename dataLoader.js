import fs from 'fs';
import path from 'path';
import { Registry, Identifier } from 'deepslate';

/**
 * Loads JSON files from the custom data pack for the given categories.
 *
 * @param {string} dataPackPath - Root folder of the custom data pack.
 * @param {string[]} categories - Array of category paths relative to data/minecraft.
 * @returns {Promise<Object>} Object containing loaded JSON data.
 */






export async function loadCustomDataPack(dataPackPath, categories) {
    const result = {};
  
    // Recursive function to read all files in subdirectories
    const readDirectoryRecursive = (dirPath, category, result) => {
      const files = fs.readdirSync(dirPath);
  
      for (const fileName of files) {
        const fullPath = path.join(dirPath, fileName);
        
        if (fs.statSync(fullPath).isDirectory()) {
          // Recursively call the function for subdirectories
          readDirectoryRecursive(fullPath, category, result);
        } else if (fileName.endsWith('.json')) {
          // Read and parse JSON files
          const fileData = fs.readFileSync(fullPath, 'utf8');
          const json = JSON.parse(fileData);
  
          // Get relative path and ensure it's in the correct format
          const relativePath = path.relative(path.join(dataPackPath, 'data', 'minecraft', category), fullPath)
            .replace('.json', '')
            .replace(/\\/g, '/'); // Fix: Replace backslashes with forward slashes
  
          const identifier = `minecraft:${relativePath}`;
          result[category][identifier] = json;
        }
      }
    };
  
    for (const category of categories) {
      result[category] = {};
  
      const categoryPath = path.join(dataPackPath, 'data', 'minecraft', ...category.split('/'));
  
      if (fs.existsSync(categoryPath)) {
        // Start the recursive reading of directories
        readDirectoryRecursive(categoryPath, category, result);
      } else {
        console.warn(`Directory ${categoryPath} does not exist. Skipping category: ${category}`);
      }
    }
  
    return result;
  }



/**
 * Applies the project data to Deepslate's registries.
 * This mimics Misode's approach for applying project data.
 *
 * @param {Object} projectData - The worldgen project data loaded from the custom data pack.
 */


export function applyDatapackData(projectData) {
    const DYNAMIC_REGISTRIES = new Set([
      'worldgen/noise',
      'worldgen/density_function',
      'worldgen/noise_settings',
    ]);
  
    Registry.REGISTRY.forEach((id, registry) => {
      if (DYNAMIC_REGISTRIES.has(id.path)) {
        console.log(`Applying datapack data for registry: ${id.toString()}`);
  
        registry.clear();
  
        const categoryData = projectData[id.path] || {};
  
        for (const [key, value] of Object.entries(categoryData)) {
          try {
            const parsedIdentifier = Identifier.parse(key);
            const parsedValue = registry.parse(value);
  
            registry.register(parsedIdentifier, parsedValue);
          } catch (error) {
            console.error(`Error registering ${key}:`, error);
          }
        }
      }
    });
  }
  
  

