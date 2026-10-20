import Link from 'next/link';
import type { Indicator } from '@/lib/types';
import { changeArrow, formatDate, formatValue } from '@/lib/format';
export default function IndicatorCard({ indicator }: { indicator: Indicator }) {
  const href = indicator.country === 'CN' ? '/china' : '/us';
  const up = indicator.latest.value > indicator.latest.prev;
  return <Link href={href} className="card group block p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
    <div className="flex items-start justify-between gap-2"><span className="text-xs font-medium text-slate-500">{indicator.name}</span><span className="rounded-md bg-slate-50 px-1.5 py-1 text-[10px] font-medium text-slate-400">{indicator.country}</span></div>
    <div className="mt-4 flex items-baseline gap-2"><strong className="text-2xl font-semibold tracking-tight text-slate-900">{formatValue(indicator.latest.value, indicator.decimals, indicator.unit)}</strong><span aria-label={`数值${up ? '上升' : indicator.latest.value === indicator.latest.prev ? '持平' : '下降'}`} className={`text-xs font-semibold ${up ? 'text-emerald-600' : indicator.latest.value === indicator.latest.prev ? 'text-slate-400' : 'text-rose-600'}`}>{changeArrow(indicator.latest.value, indicator.latest.prev)}</span></div>
    <div className="mt-2 text-[11px] text-slate-400">观测日期 {formatDate(indicator.latest.date)}</div>
  </Link>;
}
