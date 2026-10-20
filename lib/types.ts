export type Country = 'CN' | 'US';
export type CalendarCountry = Country | 'GLOBAL';
export type CalendarStatus = 'released' | 'upcoming';
export type AssetRating = '超配' | '标配' | '低配' | '—';
export type DataMode = 'demo' | 'verified';
export interface DataPoint { date: string; value: number }
export interface Interpretation { status: string; meaning: string; watch: string }
export interface Indicator { id: string; name: string; country: Country; unit: string; decimals: number; threshold: number | null; thresholdLabel?: string; latest: { value: number; prev: number; date: string }; history: DataPoint[]; interpretation: Interpretation }
export interface CalendarEvent { date: string; time?: string; title: string; country: CalendarCountry; status: CalendarStatus; actual?: string; forecast?: string }
export interface WarningSignal { id: string; name: string; currentStatus: string; threshold: string; historyNote: string; triggered: boolean }
export interface AssetRow { asset: string; cn: AssetRating; us: AssetRating; reason: string }
export interface MiniChartPoint { date: string; value: number }
export interface MiniChartSeries { id: string; title: string; unit: string; data: MiniChartPoint[] }
export interface HistoricalAnalogy { period: string; signals: string; outcome: string; match: string }
export interface DashboardData { lastUpdated: string; dataMode: DataMode; disclaimer: string; countrySummaries: Record<Country, { cycle: string; detail: string }>; overview: { summaryLines: string[]; focusItems: string[]; miniCharts: MiniChartSeries[] }; indicators: Indicator[]; calendar: CalendarEvent[]; warningSignals: WarningSignal[]; assetRows: AssetRow[]; historicalAnalogies: HistoricalAnalogy[] }
