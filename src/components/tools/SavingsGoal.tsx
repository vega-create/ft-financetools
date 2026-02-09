import { useState } from 'react';

export default function SavingsGoal() {
  const [goal, setGoal] = useState(50000);
  const [current, setCurrent] = useState(5000);
  const [months, setMonths] = useState(36);
  const [rate, setRate] = useState(5);

  const mr = rate/100/12;
  const needed = goal - current * Math.pow(1+mr, months);
  const monthly = mr > 0 ? needed * mr / (Math.pow(1+mr, months)-1) : needed / months;
  const pct = Math.min(100, current/goal*100);

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <div><label className="text-xs text-gray-500">Savings Goal ($)</label><input type="number" value={goal} onChange={e => setGoal(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Current Savings ($)</label><input type="number" value={current} onChange={e => setCurrent(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Timeline (months)</label><input type="number" value={months} onChange={e => setMonths(Math.max(1,+e.target.value))} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Annual Return (%)</label><input type="number" value={rate} onChange={e => setRate(+e.target.value)} step="0.1" className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
      </div>
      <div className="bg-emerald-900 rounded-2xl p-6 text-white text-center">
        <div className="text-sm text-emerald-200">Save Monthly</div>
        <div className="text-5xl font-bold">${Math.max(0,monthly).toLocaleString(undefined,{maximumFractionDigits:0})}</div>
      </div>
      <div><div className="flex justify-between text-xs text-gray-500 mb-1"><span>${current.toLocaleString()}</span><span>${goal.toLocaleString()}</span></div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 rounded-full" style={{width:`${pct}%`}} /></div>
        <div className="text-center text-xs text-gray-500 mt-1">{pct.toFixed(0)}% of goal</div></div>
    </div>
  );
}
