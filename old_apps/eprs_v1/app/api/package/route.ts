import { NextResponse } from 'next/server';
import { getPackageStatus } from '@/lib/eprs-package';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const status = getPackageStatus();
    return NextResponse.json(status);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Failed to retrieve package info' },
      { status: 500 }
    );
  }
}
