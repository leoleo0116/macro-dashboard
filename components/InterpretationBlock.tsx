import type { Interpretation } from '@/lib/types';
export default function InterpretationBlock({ interpretation }: { interpretation: Interpretation }) {
 const rows = [['现状', interpretation.status], ['含义', interpretation.meaning], ['关注', interpretation.watch]];
 return <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4 sm:grid-cols-3 sm:gap-4">{rows.map(([label, text]) => <p key={label} className="text-xs leading-5 text-slate-600"><span className="mr-2 text-[10px] font-medium uppercase tracking-wide text-slate-400">{label}</span>{text}</p>)}</div>;
}
