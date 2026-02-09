import { useState } from 'react';

export default function MortgageCalc() {
  const [price, setPrice] = useState(300000);
  const [down, setDown] = useState(60000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const principal = price - down;
  const mr = rate / 100 / 12;
  const n = years * 12;
  const monthly = mr > 0 ? principal * (mr * Math.pow(1+mr,n)) / (Math.pow(1+mr,n)-1) : principal / n;
  const totalPaid = monthly * n;
  const totalInterest = totalPaid - principal;

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <div><label className="text-xs text-gray-500">Home Price ($)</label><input type="number" value={price} onChange={e => setPrice(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Down Payment ($)</label><input type="number" value={down} onChange={e => setDown(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Interest Rate (%)</label><input type="number" value={rate} onChange={e => setRate(+e.target.value)} step="0.1" className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Loan Term</label>
          <div className="flex gap-1">{[15,20,30].map(y => (<button key={y} onClick={() => setYears(y)} className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${years===y?'bg-emerald-900 text-white':'bg-gray-100 text-gray-600'}`}>{y}yr</button>))}</div></div>
      </div>
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-2xl p-6 text-white text-center">
        <div className="text-sm text-emerald-200">Monthly Payment</div>
        <div className="text-5xl font-bold mt-1">${monthly.toLocaleString(undefined,{maximumFractionDigits:0})}</div>
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-white border border-gray-100 rounded-xl p-3"><div className="text-lg font-bold text-gray-900">${principal.toLocaleString()}</div><div className="text-xs text-gray-500">Loan Amount</div></div>
        <div className="bg-white border border-gray-100 rounded-xl p-3"><div className="text-lg font-bold text-amber-600">${totalInterest.toLocaleString(undefined,{maximumFractionDigits:0})}</div><div className="text-xs text-gray-500">Total Interest</div></div>
        <div className="bg-white border border-gray-100 rounded-xl p-3"><div className="text-lg font-bold text-gray-900">${totalPaid.toLocaleString(undefined,{maximumFractionDigits:0})}</div><div className="text-xs text-gray-500">Total Paid</div></div>
      </div>
    </div>
  );
}
