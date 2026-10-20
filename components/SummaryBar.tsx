export default function SummaryBar({ lines }: { lines: string[] }) {
 return <div className="rounded-xl border border-blue-100 bg-blue-50/80 px-5 py-4"><div className="mb-2 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"/><h2 className="text-xs font-semibold tracking-wide text-blue-900">宏观摘要</h2><span className="text-[10px] text-blue-500">样例观察</span></div><div className="grid gap-1.5 md:grid-cols-3">{lines.map((line) => <p key={line} className="text-xs leading-5 text-blue-900/80">{line}</p>)}</div></div>;
}
