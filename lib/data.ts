import raw from '@/data/indicators.json';
import type { DashboardData } from './types';
export const dashboardData = raw as DashboardData;
export const indicatorById = (id: string) => dashboardData.indicators.find((indicator) => indicator.id === id)!;
