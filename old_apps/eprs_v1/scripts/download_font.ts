import fs from 'fs';
import path from 'path';
import https from 'https';

const fontUrl = 'https://raw.githubusercontent.com/google/fonts/main/ofl/notosanstc/NotoSansTC%5Bwght%5D.ttf';
const fontPath = path.join(process.cwd(), 'scripts', 'NotoSansTC.ttf');

console.log('Downloading Noto Sans TC font...');
const file = fs.createWriteStream(fontPath);
https.get('https://github.com/google/fonts/raw/main/ofl/notosanstc/NotoSansTC%5Bwght%5D.ttf', (response) => {
  if (response.statusCode === 302 || response.statusCode === 301) {
    https.get(response.headers.location!, (res2) => {
      res2.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Font downloaded successfully!');
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Font downloaded successfully!');
    });
  }
});
