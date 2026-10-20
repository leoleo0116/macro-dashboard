import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import DemoDataNotice from '@/components/DemoDataNotice';
import './globals.css';
export const metadata: Metadata = { title: '宏观监测仪表盘', description: '中美宏观指标与大类资产配置研究仪表盘（静态演示数据）' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="zh-CN"><body><NavBar/><DemoDataNotice/><main className="mx-auto min-h-[calc(100vh-110px)] max-w-7xl px-4 py-6 sm:px-6 sm:py-8">{children}</main><footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6"><span>宏观监测仪表盘 · Phase 1 MVP</span><span>静态演示数据 · 非实时 · 未经核验</span></div></footer></body></html>;
}
