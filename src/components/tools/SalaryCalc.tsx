import { useState } from 'react';

export default function SalaryCalc() {
  const [amount, setAmount] = useState(75000);
  const [type, setType] = useState<'annual'|'monthly'|'biweekly'|'weekly'|'hourly'>('annual');
  const [hoursWeek, setHoursWeek] = useState(40);

  const annual = type==='annual'?amount:type==='monthly'?amount*12:type==='biweekly'?amount*26:type==='weekly'?amount*52:amount*hoursWeek*52;
  const vals = {Annual:annual,'Monthly':annual/12,'Bi-weekly':annual/26,'Weekly':annual/52,'Daily':annual/260,'Hourly':annual/(52*hoursWeek)};

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="flex gap-2">
        <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} className="flex-1 px-3 py-3 border border-gray-200 rounded-lg text-xl font-mono" />
        <select value={type} onChange={e => setType(e.target.value as any)} className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
          <option value="annual">Annual</option><option value="monthly">Monthly</option><option value="biweekly">Bi-weekly</option><option value="weekly">Weekly</option><option value="hourly">Hourly</option>
        </select>
      </div>
      {type === 'hourly' && <div><label className="text-xs text-gray-500">Hours/week</label><input type="number" value={hoursWeek} onChange={e => setHoursWeek(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>}
      <div className="space-y-2">
        {Object.entries(vals).map(([label, val]) => (
          <div key={label} className="flex justify-between items-center bg-white border border-gray-100 rounded-xl p-4">
            <span className="text-sm text-gray-600">{label}</span>
            <span className="font-mono font-bold text-gray-900">${val.toLocaleString(undefined,{maximumFractionDigits:2})}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
