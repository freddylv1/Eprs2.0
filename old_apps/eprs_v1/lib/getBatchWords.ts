import { allBatchData, BatchWord } from '@/lib/batch01Data';
import { seniorBatch01Words } from '@/lib/seniorBatch01Data';
import { seniorBatch02Words } from '@/lib/seniorBatch02Data';
import { seniorBatch03Words } from '@/lib/seniorBatch03Data';
import { seniorBatch04Words } from '@/lib/seniorBatch04Data';
import { seniorBatch05Words } from '@/lib/seniorBatch05Data';
import { seniorBatch06Words } from '@/lib/seniorBatch06Data';
import { seniorBatch07Words } from '@/lib/seniorBatch07Data';
import { seniorBatch08Words } from '@/lib/seniorBatch08Data';
import { seniorBatch09Words } from '@/lib/seniorBatch09Data';
import { seniorBatch10Words } from '@/lib/seniorBatch10Data';
import { seniorBatch11Words } from '@/lib/seniorBatch11Data';
import { seniorBatch12Words } from '@/lib/seniorBatch12Data';

export interface BatchWordsResult {
  words: BatchWord[];
  rawBatch: string;
  isSenior: boolean;
  seniorBatchNum: number;
  batchNum: number;
  totalWordsCount: number;
}

export function getBatchWords(rawBatch: string = 'senior-11'): BatchWordsResult {
  const isSenior = rawBatch.toLowerCase().startsWith('senior');
  const seniorBatchNum = isSenior ? (parseInt(rawBatch.replace(/[^0-9]/g, ''), 10) || 1) : 0;
  const batchNum = isSenior ? seniorBatchNum : (rawBatch === 'all' ? 0 : (parseInt(rawBatch, 10) || 1));

  let words: BatchWord[] = [];
  if (isSenior) {
    switch (seniorBatchNum) {
      case 12:
        words = seniorBatch12Words;
        break;
      case 11:
        words = seniorBatch11Words;
        break;
      case 10:
        words = seniorBatch10Words;
        break;
      case 9:
        words = seniorBatch09Words;
        break;
      case 8:
        words = seniorBatch08Words;
        break;
      case 7:
        words = seniorBatch07Words;
        break;
      case 6:
        words = seniorBatch06Words;
        break;
      case 5:
        words = seniorBatch05Words;
        break;
      case 4:
        words = seniorBatch04Words;
        break;
      case 3:
        words = seniorBatch03Words;
        break;
      case 2:
        words = seniorBatch02Words;
        break;
      default:
        words = seniorBatch01Words;
        break;
    }
  } else {
    if (batchNum === 0) {
      words = allBatchData;
    } else {
      words = allBatchData.filter((w) => w.batch === batchNum);
    }
  }

  const totalWordsCount = isSenior ? 1200 : allBatchData.length;

  return {
    words,
    rawBatch,
    isSenior,
    seniorBatchNum,
    batchNum,
    totalWordsCount,
  };
}
