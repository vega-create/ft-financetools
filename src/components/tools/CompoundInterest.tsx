import { useState } from 'react';

export default function CompoundInterest() {
  const [principal, setPrincipal] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);
  const [freq, setFreq] = useState(12);

  const r = rate/100, n = freq;
  let total = principal * Math.pow(1+r/n, n*years);
  if (monthly > 0) total += monthly * ((Math.pow(1+r/n, n*years)-1)/(r/n));
  const deposited = principal + monthly*12*years;
  const interest = total - deposited;

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <div><label className="text-xs text-gray-500">Initial Investment ($)</label><input type="number" value={principal} onChange={e => setPrincipal(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Monthly Contribution ($)</label><input type="number" value={monthly} onChange={e => setMonthly(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Annual Return (%)</label><input type="number" value={rate} onChange={e => setRate(+e.target.value)} step="0.1" className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Time (years)</label><input type="number" value={years} onChange={e => setYears(Math.max(1,+e.target.value))} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
      </div>
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-2xl p-6 text-white text-center">
        <div className="text-sm text-emerald-200">Future Value</div>
        <div className="text-5xl font-bold">${total.toLocaleString(undefined,{maximumFractionDigits:0})}</div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-white border border-gray-100 rounded-xl p-4"><div className="text-xl font-bold text-emerald-700">${deposited.toLocaleString()}</div><div className="text-xs text-gray-500">Total Deposited</div></div>
        <div className="bg-white border border-gray-100 rounded-xl p-4"><div className="text-xl font-bold text-amber-600">${interest.toLocaleString(undefined,{maximumFractionDigits:0})}</div><div className="text-xs text-gray-500">Interest Earned</div></div>
      </div>
      <div className="h-6 rounded-full overflow-hidden flex">
        <div className="bg-emerald-600" style={{width:`${deposited/total*100}%`}} /><div className="bg-amber-500" style={{width:`${interest/total*100}%`}} />
      </div>
      <div className="flex justify-between text-xs text-gray-500"><span>💰 Deposits {(deposited/total*100).toFixed(0)}%</span><span>📈 Interest {(interest/total*100).toFixed(0)}%</span></div>
    </div>
  );
}
