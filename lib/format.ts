export function formatValue(value: number, decimals: number, unit: string) {
  const number = value.toFixed(decimals);
  if (unit === '%') return `${number}%`;
  if (unit === '点') return `${number}点`;
  if (unit === 'bp') return `${number}bp`;
  return `${number}${unit}`;
}
export function changeArrow(value: number, prev: number) { return value > prev ? '↑' : value < prev ? '↓' : '→'; }
export function formatDate(date: string) { return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$1年$2月$3日'); }
export function monthLabel(date: string) { return `${date.slice(5, 7)}月`; }
