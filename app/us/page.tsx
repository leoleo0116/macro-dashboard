import { dashboardData } from '@/lib/data';
import TrendChart from '@/components/TrendChart';
import InterpretationBlock from '@/components/InterpretationBlock';
export default function USPage() {
 const indicators = dashboardData.indicators.filter((i)=>i.country==='US');
 return <div className="space-y-5"><div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><div className="eyebrow">COUNTRY MONITOR · US</div><h1 className="mt-1 text-2xl font-semibold tracking-tight">🇺🇸 美国宏观</h1></div><span className="text-xs text-slate-400">8 项指标 · 静态演示序列</span></div>
 <div className="rounded-xl border border-blue-100 bg-blue-50/80 p-4 sm:px-5"><p className="text-sm font-semibold text-blue-950">{dashboardData.countrySummaries.US.cycle}</p><p className="mt-1.5 text-xs leading-5 text-blue-900/75">{dashboardData.countrySummaries.US.detail}</p></div>
 {indicators.map((indicator)=><article key={indicator.id} className="card p-4 sm:p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-sm font-semibold text-slate-900">{indicator.name}</h2><p className="mt-1 text-xs text-slate-400">单位：{indicator.unit} · 观测日期 {indicator.latest.date}</p></div><div className="text-right"><strong className="text-lg font-semibold text-slate-900">{indicator.latest.value.toFixed(indicator.decimals)}{indicator.unit}</strong><p className="mt-0.5 text-[10px] text-slate-400">样例值</p></div></div><div className="mt-3"><TrendChart indicator={indicator}/></div><InterpretationBlock interpretation={indicator.interpretation}/></article>)}
 </div>;
}
