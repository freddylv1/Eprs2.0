import { getBatchWords } from '@/lib/getBatchWords';
import ReportView from '@/components/ReportView';

interface PageProps {
  params: Promise<{
    batch: string;
  }>;
}

export function generateStaticParams() {
  const batches: { batch: string }[] = [];
  for (let i = 1; i <= 12; i++) {
    batches.push({ batch: `senior-${i}` });
    batches.push({ batch: `senior-${String(i).padStart(2, '0')}` });
  }
  batches.push({ batch: 'all' });
  for (let i = 1; i <= 12; i++) {
    batches.push({ batch: String(i) });
  }
  return batches;
}

export default async function ReportPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawBatch = resolvedParams?.batch || 'senior-11';
  const { words, isSenior, seniorBatchNum, batchNum, totalWordsCount } = getBatchWords(rawBatch);

  return (
    <ReportView
      initialWords={words}
      rawBatch={rawBatch}
      isSenior={isSenior}
      seniorBatchNum={seniorBatchNum}
      batchNum={batchNum}
      totalWordsCount={totalWordsCount}
    />
  );
}
