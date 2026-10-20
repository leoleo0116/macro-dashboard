'use client';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import type { MiniChartSeries } from '@/lib/types';
export default function MiniTrendChart({ series }: { series: MiniChartSeries }) {
  return <section className="card p-4"><div className="mb-3 flex items-start justify-between gap-2"><h3 className="text-sm font-semibold text-slate-800">{series.title}</h3><span className="text-[10px] text-slate-400">演示序列</span></div><div className="h-[112px] w-full"><ResponsiveContainer width="100%" height="100%"><LineChart data={series.data} margin={{ top: 8, right: 3, left: 3, bottom: 2 }}><Tooltip labelFormatter={(label) => String(label)} formatter={(value) => [`${value}${series.unit}`, series.title]} contentStyle={{ border: '1px solid #e2e8f0', borderRadius: 9, fontSize: 11 }} /><Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} activeDot={{ r: 4 }} /></LineChart></ResponsiveContainer></div><p className="mt-2 text-[10px] text-slate-400">数据未核验 · {series.unit}</p></section>;
}
