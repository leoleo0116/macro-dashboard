import Link from 'next/link';
import { dashboardData, indicatorById } from '@/lib/data';
import SummaryBar from '@/components/SummaryBar';
import DataCalendar from '@/components/DataCalendar';
import IndicatorCard from '@/components/IndicatorCard';
import MiniTrendChart from '@/components/MiniTrendChart';
export default function OverviewPage() {
 const core = ['cn_pmi','us_core_cpi','us_fed','us_spread'].map(indicatorById);
 return <div className="space-y-6">
  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><div className="eyebrow">GLOBAL MACRO · DASHBOARD</div><h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">全球宏观总览</h1></div><p className="text-xs text-slate-400">演示文件更新于 {dashboardData.lastUpdated}</p></div>
  <SummaryBar lines={dashboardData.overview.summaryLines}/>
  <Link href="/warning" className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-blue-200 hover:shadow-md"><div className="flex items-center gap-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-lg">◉</span><div><div className="text-sm font-semibold text-slate-900">综合风险温度</div><div className="mt-1 text-xs text-slate-500">预警信号与风险评分尚未接入</div></div></div><div className="flex items-center gap-3"><span className="text-right"><strong className="block text-xl font-semibold text-slate-400">—</strong><small className="text-[10px] text-slate-400">待 Phase 2 接入</small></span><span aria-hidden="true" className="text-lg text-slate-300 transition group-hover:text-blue-600">↗</span></div></Link>
  <DataCalendar events={dashboardData.calendar}/>
  <section><div className="mb-3 flex items-center justify-between"><div><h2 className="text-sm font-semibold text-slate-900">中美核心指标</h2><p className="mt-1 text-xs text-slate-400">最新样例读数与前值方向 · 点击查看国家详情</p></div><span className="text-[10px] text-slate-400">4 项监测</span></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{core.map((indicator)=><IndicatorCard key={indicator.id} indicator={indicator}/>)}</div></section>
  <section><div className="mb-3 flex items-center justify-between"><div><h2 className="text-sm font-semibold text-slate-900">中美互动观察</h2><p className="mt-1 text-xs text-slate-400">示意序列，仅用于界面展示</p></div><span className="text-[10px] text-slate-400">3 组序列</span></div><div className="grid grid-cols-1 gap-3 md:grid-cols-3">{dashboardData.overview.miniCharts.map((series)=><MiniTrendChart key={series.id} series={series}/>)}</div></section>
  <section className="card p-5"><div className="mb-4 flex items-center gap-2"><span className="text-blue-600">✳</span><h2 className="text-sm font-semibold text-slate-900">今日关注</h2><span className="text-[10px] text-slate-400">日程样例</span></div><ul className="space-y-3">{dashboardData.overview.focusItems.map((item,index)=><li key={item} className="flex items-start gap-3 text-xs leading-5 text-slate-600"><span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-slate-100 text-[9px] text-slate-500">0{index+1}</span>{item}</li>)}</ul></section>
 </div>;
}
