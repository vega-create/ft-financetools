import { useState } from 'react';

export default function LoanCalc() {
  const [amount, setAmount] = useState(25000);
  const [rate, setRate] = useState(7.5);
  const [years, setYears] = useState(5);

  const mr = rate/100/12, n = years*12;
  const monthly = mr > 0 ? amount*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1) : amount/n;
  const total = monthly*n;
  const interest = total-amount;

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-3 gap-3">
        <div><label className="text-xs text-gray-500">Loan Amount ($)</label><input type="number" value={amount} onChange={e => setAmount(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Interest Rate (%)</label><input type="number" value={rate} onChange={e => setRate(+e.target.value)} step="0.1" className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Term (years)</label><input type="number" value={years} onChange={e => setYears(Math.max(1,+e.target.value))} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
      </div>
      <div className="bg-emerald-900 rounded-2xl p-6 text-white text-center">
        <div className="text-sm text-emerald-200">Monthly Payment</div>
        <div className="text-5xl font-bold">${monthly.toLocaleString(undefined,{maximumFractionDigits:2})}</div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-white border border-gray-100 rounded-xl p-4"><div className="text-xl font-bold text-amber-600">${interest.toLocaleString(undefined,{maximumFractionDigits:0})}</div><div className="text-xs text-gray-500">Total Interest</div></div>
        <div className="bg-white border border-gray-100 rounded-xl p-4"><div className="text-xl font-bold text-gray-900">${total.toLocaleString(undefined,{maximumFractionDigits:0})}</div><div className="text-xs text-gray-500">Total Cost</div></div>
      </div>
    </div>
  );
}
