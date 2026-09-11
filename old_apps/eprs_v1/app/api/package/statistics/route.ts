import { NextRequest, NextResponse } from 'next/server';
import { getPackageStatistics } from '@/lib/eprs-package';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const stats = getPackageStatistics();
    return NextResponse.json(stats);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Failed to retrieve package statistics' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const stats = getPackageStatistics();
    return NextResponse.json(stats);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Failed to retrieve package statistics' },
      { status: 500 }
    );
  }
}
