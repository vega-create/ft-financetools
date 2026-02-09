import { useState } from 'react';

export default function InvestmentReturn() {
  const [initial, setInitial] = useState(10000);
  const [final_, setFinal] = useState(15000);
  const [years, setYears] = useState(3);

  const roi = ((final_ - initial) / initial) * 100;
  const annualized = (Math.pow(final_/initial, 1/years) - 1) * 100;
  const gain = final_ - initial;

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="space-y-3">
        <div><label className="text-xs text-gray-500">Initial Investment ($)</label><input type="number" value={initial} onChange={e => setInitial(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Current Value ($)</label><input type="number" value={final_} onChange={e => setFinal(+e.target.value)} className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
        <div><label className="text-xs text-gray-500">Time Period (years)</label><input type="number" value={years} onChange={e => setYears(Math.max(0.1,+e.target.value))} step="0.5" className="w-full px-3 py-2 border border-gray-200 rounded-lg" /></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className={`rounded-xl p-5 text-center ${gain>=0?'bg-emerald-50':'bg-red-50'}`}>
          <div className={`text-3xl font-bold ${gain>=0?'text-emerald-700':'text-red-600'}`}>{roi.toFixed(1)}%</div><div className="text-xs text-gray-500 mt-1">Total ROI</div></div>
        <div className={`rounded-xl p-5 text-center ${gain>=0?'bg-emerald-50':'bg-red-50'}`}>
          <div className={`text-3xl font-bold ${gain>=0?'text-emerald-700':'text-red-600'}`}>{annualized.toFixed(2)}%</div><div className="text-xs text-gray-500 mt-1">Annualized</div></div>
      </div>
      <div className="bg-white border border-gray-100 rounded-xl p-4 text-center">
        <div className={`text-2xl font-bold ${gain>=0?'text-emerald-700':'text-red-600'}`}>{gain >= 0 ? '+' : ''}${gain.toLocaleString()}</div><div className="text-xs text-gray-500">Total {gain >= 0 ? 'Gain' : 'Loss'}</div></div>
    </div>
  );
}
