'use client';
import { Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { Indicator } from '@/lib/types';
import { formatValue, monthLabel } from '@/lib/format';
export default function TrendChart({ indicator }: { indicator: Indicator }) {
  return <div className="h-[220px] w-full" aria-label={`${indicator.name}演示趋势图`}>
    <ResponsiveContainer width="100%" height="100%"><LineChart data={indicator.history} margin={{ top: 15, right: 20, left: 4, bottom: 0 }}>
      <XAxis dataKey="date" tickFormatter={monthLabel} tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} minTickGap={25} />
      <YAxis domain={['auto', 'auto']} width={50} tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => Number(v).toFixed(indicator.decimals)} />
      <Tooltip labelFormatter={(label) => String(label)} formatter={(value) => [formatValue(Number(value), indicator.decimals, indicator.unit), indicator.name]} contentStyle={{ border: '1px solid #e2e8f0', borderRadius: 10, fontSize: 12 }} />
      {indicator.threshold !== null && <ReferenceLine y={indicator.threshold} stroke="#ef4444" strokeDasharray="4 4" label={{ value: `${indicator.threshold}${indicator.unit === '点' ? '点' : indicator.unit}`, fill: '#ef4444', fontSize: 10, position: 'insideTopRight' }} />}
      <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2.2} dot={false} activeDot={{ r: 4, fill: '#2563eb' }} />
    </LineChart></ResponsiveContainer>
  </div>;
}
