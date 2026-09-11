import fs from 'fs';
import path from 'path';
import { allBatchData } from '../lib/batch01Data';
import { generateBatchHtmlString } from '../lib/htmlReportGenerator';
import { generateIndex1200HtmlString } from '../lib/index1200Generator';
import { seniorBatch01Words } from '../lib/seniorBatch01Data';
import { seniorBatch02Words } from '../lib/seniorBatch02Data';
import { seniorBatch03Words } from '../lib/seniorBatch03Data';
import { seniorBatch04Words } from '../lib/seniorBatch04Data';
import { seniorBatch05Words } from '../lib/seniorBatch05Data';
import { seniorBatch06Words } from '../lib/seniorBatch06Data';
import { seniorBatch07Words } from '../lib/seniorBatch07Data';
import { seniorBatch08Words } from '../lib/seniorBatch08Data';
import { seniorBatch09Words } from '../lib/seniorBatch09Data';
import { generateSeniorBatchHtmlString } from '../lib/seniorHtmlReportGenerator';

const publicDir = path.join(process.cwd(), 'public');

async function main() {
  console.log('--- Updating all MOE 1200 Batches (1-12) & All-in-one HTML reports ---');
  for (let b = 1; b <= 12; b++) {
    const words = allBatchData.filter(w => w.batch === b);
    if (words.length > 0) {
      const html = generateBatchHtmlString(b, words);
      const filename = `EPRS_MOE1200_Batch${String(b).padStart(2, '0')}_Report.html`;
      fs.writeFileSync(path.join(publicDir, filename), html, 'utf8');
      console.log(`✔ Generated ${filename}`);
    }
  }

  // All 1200 words
  const allHtml = generateBatchHtmlString(0, allBatchData);
  fs.writeFileSync(path.join(publicDir, 'EPRS_MOE1200_All1200_Pronunciation_Report.html'), allHtml, 'utf8');
  console.log(`✔ Generated EPRS_MOE1200_All1200_Pronunciation_Report.html`);

  // Senior Level 1 Batches 01 ~ 09
  console.log('--- Updating Senior High Level 1 Batches (01-09) HTML reports ---');
  const seniorBatches = [
    { num: 1, words: seniorBatch01Words },
    { num: 2, words: seniorBatch02Words },
    { num: 3, words: seniorBatch03Words },
    { num: 4, words: seniorBatch04Words },
    { num: 5, words: seniorBatch05Words },
    { num: 6, words: seniorBatch06Words },
    { num: 7, words: seniorBatch07Words },
    { num: 8, words: seniorBatch08Words },
    { num: 9, words: seniorBatch09Words }
  ];

  for (const sb of seniorBatches) {
    const html = generateSeniorBatchHtmlString(sb.num, sb.words as any);
    const filename = `EPRS_Senior_Level1_Batch${String(sb.num).padStart(2, '0')}_Report.html`;
    fs.writeFileSync(path.join(publicDir, filename), html, 'utf8');
    console.log(`✔ Generated ${filename}`);
  }

  // Master Portal index1200.html
  console.log('--- Updating Master Portal index1200.html ---');
  const indexHtml = generateIndex1200HtmlString();
  fs.writeFileSync(path.join(publicDir, 'index1200.html'), indexHtml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'Index1200.html'), indexHtml, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), 'index1200.html'), indexHtml, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), 'Index1200.html'), indexHtml, 'utf8');
  console.log(`✔ Generated index1200.html and Index1200.html`);

  console.log('All standalone HTML reports regenerated with Rule Modal support successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
