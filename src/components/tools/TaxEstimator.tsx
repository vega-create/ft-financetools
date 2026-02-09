import { useState } from 'react';

const brackets2024 = [
  {min:0,max:11600,rate:10},{min:11600,max:47150,rate:12},{min:47150,max:100525,rate:22},
  {min:100525,max:191950,rate:24},{min:191950,max:243725,rate:32},{min:243725,max:609350,rate:35},{min:609350,max:Infinity,rate:37},
];

export default function TaxEstimator() {
  const [income, setIncome] = useState(85000);
  const [deduction, setDeduction] = useState(14600);

  const taxable = Math.max(0, income - deduction);
  let tax = 0;
  const breakdown: {bracket:string;taxable:number;tax:number;rate:number}[] = [];
  for (const b of brackets2024) {
    if (taxable > b.min) {
      const amt = Math.min(taxable, b.max) - b.min;
      const t = amt * b.rate / 100;
      tax += t;
      breakdown.push({bracket:`$${b.min.toLocaleString()}-${b.max===Infinity?'+':('$'+b.max.toLocaleString())}`,taxable:amt,tax:t,rate:b.rate});
    }
  }
  const effective = taxable > 0 ? tax/taxable*100 : 0;

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <div><label className="text-xs text-gray-500">Gross Income ($)</label><input type="number" value={income} onChange={e => setIncome(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Standard Deduction ($)</label><input type="number" value={deduction} onChange={e => setDeduction(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-emerald-900 rounded-xl p-4 text-white"><div className="text-2xl font-bold">${tax.toLocaleString(undefined,{maximumFractionDigits:0})}</div><div className="text-xs text-emerald-200">Est. Tax</div></div>
        <div className="bg-white border rounded-xl p-4"><div className="text-2xl font-bold text-amber-600">{effective.toFixed(1)}%</div><div className="text-xs text-gray-500">Effective Rate</div></div>
        <div className="bg-white border rounded-xl p-4"><div className="text-2xl font-bold text-gray-900">${(income-tax).toLocaleString(undefined,{maximumFractionDigits:0})}</div><div className="text-xs text-gray-500">After Tax</div></div>
      </div>
      <div className="space-y-1">{breakdown.map((b,i) => (
        <div key={i} className="flex items-center gap-2 text-xs"><span className="w-24 text-gray-500">{b.rate}%</span>
          <div className="flex-1 h-5 bg-gray-100 rounded overflow-hidden"><div className="h-full bg-emerald-500 rounded" style={{width:`${b.taxable/taxable*100}%`}} /></div>
          <span className="w-20 text-right font-mono">${b.tax.toLocaleString(undefined,{maximumFractionDigits:0})}</span></div>
      ))}</div>
      <p className="text-xs text-gray-400">⚠️ Estimate only. Based on 2024 US federal single filer brackets. Not financial advice.</p>
    </div>
  );
}
