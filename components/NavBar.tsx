'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
  { href: '/', label: '总览' }, { href: '/china', label: '中国' }, { href: '/us', label: '美国' },
  { href: '/allocation', label: '周期配置' }, { href: '/warning', label: '危机预警' },
];
export default function NavBar() {
  const pathname = usePathname();
  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6">
      <Link href="/" className="flex shrink-0 items-center gap-2.5 text-sm font-semibold tracking-tight text-slate-900"><span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white">M</span>宏观监测仪表盘</Link>
      <nav aria-label="主导航" className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap text-sm">
        {links.map((link) => { const active = pathname === link.href; return <Link key={link.href} href={link.href} aria-current={active ? 'page' : undefined} className={`rounded-lg px-3 py-2 transition ${active ? 'bg-blue-50 font-semibold text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>{link.label}</Link>; })}
      </nav>
      <span className="hidden shrink-0 items-center gap-2 text-xs text-slate-400 lg:flex"><i className="h-1.5 w-1.5 rounded-full bg-amber-400" />静态演示</span>
    </div>
  </header>;
}
