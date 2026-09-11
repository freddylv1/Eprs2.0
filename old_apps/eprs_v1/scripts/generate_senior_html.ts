import fs from 'fs';
import path from 'path';
import { seniorBatch01Words } from '../lib/seniorBatch01Data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';

const html = generateSeniorBatchHtmlString(1, seniorBatch01Words);
const destPath = path.join(process.cwd(), 'public', 'EPRS_Senior_Level1_Batch01_Report.html');
fs.writeFileSync(destPath, html, 'utf8');
console.log(`Successfully generated public/EPRS_Senior_Level1_Batch01_Report.html with ${seniorBatch01Words.length} words!`);
