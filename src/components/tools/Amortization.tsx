import { useState } from 'react';

export default function Amortization() {
  const [amount, setAmount] = useState(200000);
  const [rate, setRate] = useState(6.0);
  const [years, setYears] = useState(30);
  const [show, setShow] = useState(false);

  const mr = rate/100/12, n = years*12;
  const pmt = mr > 0 ? amount*(mr*Math.pow(1+mr,n))/(Math.pow(1+mr,n)-1) : amount/n;

  const schedule: {month:number;payment:number;principal:number;interest:number;balance:number}[] = [];
  let bal = amount;
  for (let i = 1; i <= n; i++) {
    const int = bal*mr, prin = pmt-int;
    bal = Math.max(0, bal-prin);
    schedule.push({month:i,payment:pmt,principal:prin,interest:int,balance:bal});
  }

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-3 gap-3">
        <div><label className="text-xs text-gray-500">Loan ($)</label><input type="number" value={amount} onChange={e => setAmount(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Rate (%)</label><input type="number" value={rate} onChange={e => setRate(+e.target.value)} step="0.1" className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Years</label><input type="number" value={years} onChange={e => setYears(Math.max(1,+e.target.value))} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
      </div>
      <button onClick={() => setShow(!show)} className="w-full py-3 bg-emerald-900 text-white rounded-xl font-bold hover:bg-emerald-800">📊 {show ? 'Hide' : 'Show'} Schedule ({n} payments)</button>
      {show && (
        <div className="overflow-x-auto max-h-96">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-gray-50"><tr>{['#','Payment','Principal','Interest','Balance'].map(h => <th key={h} className="px-2 py-2 text-left font-medium text-gray-500">{h}</th>)}</tr></thead>
            <tbody>{schedule.map(r => (
              <tr key={r.month} className="border-t border-gray-50">
                <td className="px-2 py-1.5 text-gray-400">{r.month}</td>
                <td className="px-2 py-1.5 font-mono">${r.payment.toFixed(2)}</td>
                <td className="px-2 py-1.5 font-mono text-emerald-700">${r.principal.toFixed(2)}</td>
                <td className="px-2 py-1.5 font-mono text-amber-600">${r.interest.toFixed(2)}</td>
                <td className="px-2 py-1.5 font-mono">${r.balance.toFixed(2)}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
