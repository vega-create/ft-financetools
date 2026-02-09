import { useState } from 'react';

const rates: Record<string,number> = {USD:1,EUR:0.92,GBP:0.79,JPY:149.5,TWD:31.5,CNY:7.2,KRW:1320,CAD:1.35,AUD:1.53,CHF:0.88,SGD:1.34,HKD:7.82,INR:83.1,BRL:4.97,MXN:17.1};

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1000);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('TWD');

  const usd = amount / rates[from];
  const result = usd * rates[to];
  const rateDisplay = rates[to] / rates[from];

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="flex gap-2">
        <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} className="flex-1 px-3 py-3 border border-gray-200 rounded-lg text-xl font-mono" />
        <select value={from} onChange={e => setFrom(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg font-medium">{Object.keys(rates).map(c => <option key={c}>{c}</option>)}</select>
      </div>
      <div className="text-center"><button onClick={() => {setFrom(to);setTo(from);}} className="text-2xl">🔄</button></div>
      <div className="flex gap-2 items-center">
        <div className="flex-1 px-3 py-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xl font-mono font-bold text-emerald-700">{result.toLocaleString(undefined,{maximumFractionDigits:2})}</div>
        <select value={to} onChange={e => setTo(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg font-medium">{Object.keys(rates).map(c => <option key={c}>{c}</option>)}</select>
      </div>
      <div className="text-center text-sm text-gray-500">1 {from} = {rateDisplay.toFixed(4)} {to}</div>
      <p className="text-xs text-gray-400">⚠️ Rates are approximate and for reference only. Not real-time.</p>
    </div>
  );
}
