import { useState } from 'react';

export default function TipCalc() {
  const [bill, setBill] = useState(85);
  const [tip, setTip] = useState(18);
  const [split, setSplit] = useState(2);

  const tipAmt = bill * tip / 100;
  const total = bill + tipAmt;
  const perPerson = total / split;

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div><label className="text-xs text-gray-500">Bill Amount ($)</label><input type="number" value={bill} onChange={e => setBill(+e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xl font-mono" /></div>
      <div><label className="text-xs text-gray-500 mb-2 block">Tip: {tip}%</label>
        <div className="flex gap-2">{[10,15,18,20,25].map(t => (
          <button key={t} onClick={() => setTip(t)} className={`flex-1 py-2 rounded-lg text-sm font-medium ${tip===t?'bg-emerald-900 text-white':'bg-gray-100 text-gray-600'}`}>{t}%</button>
        ))}</div>
        <input type="range" min="0" max="40" value={tip} onChange={e => setTip(+e.target.value)} className="w-full mt-2 accent-emerald-600" /></div>
      <div><label className="text-xs text-gray-500">Split Between</label>
        <div className="flex gap-2">{[1,2,3,4,5,6].map(n => (
          <button key={n} onClick={() => setSplit(n)} className={`flex-1 py-2 rounded-lg text-sm font-medium ${split===n?'bg-amber-600 text-white':'bg-gray-100 text-gray-600'}`}>{n}</button>
        ))}</div></div>
      <div className="bg-emerald-900 rounded-2xl p-6 text-white">
        <div className="flex justify-between mb-3"><span className="text-emerald-200">Tip</span><span className="font-bold">${tipAmt.toFixed(2)}</span></div>
        <div className="flex justify-between mb-3 text-xl"><span className="text-emerald-200">Total</span><span className="font-bold">${total.toFixed(2)}</span></div>
        {split > 1 && <div className="border-t border-emerald-700 pt-3 flex justify-between text-2xl"><span className="text-emerald-200">Per person</span><span className="font-bold">${perPerson.toFixed(2)}</span></div>}
      </div>
    </div>
  );
}
