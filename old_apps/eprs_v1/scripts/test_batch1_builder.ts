import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const sourcePath = path.join(process.cwd(), 'Source', 'MOE_1200_Source_list.yaml');
const sourceData: any = yaml.load(fs.readFileSync(sourcePath, 'utf8'));
const words = sourceData.words.slice(0, 100);

console.log(`Loaded ${words.length} words for batch 1.`);
