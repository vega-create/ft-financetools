import { useState } from 'react';

export default function DiscountCalc() {
  const [price, setPrice] = useState(150);
  const [discount, setDiscount] = useState(25);

  const saved = price * discount / 100;
  const final_ = price - saved;

  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div><label className="text-xs text-gray-500">Original Price ($)</label><input type="number" value={price} onChange={e => setPrice(+e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xl font-mono" /></div>
      <div><label className="text-xs text-gray-500 mb-2 block">Discount: {discount}%</label>
        <div className="flex gap-2 mb-2">{[10,15,20,25,30,40,50].map(d => (
          <button key={d} onClick={() => setDiscount(d)} className={`flex-1 py-2 rounded-lg text-xs font-medium ${discount===d?'bg-amber-600 text-white':'bg-gray-100 text-gray-600'}`}>{d}%</button>
        ))}</div>
        <input type="range" min="1" max="90" value={discount} onChange={e => setDiscount(+e.target.value)} className="w-full accent-amber-600" /></div>
      <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
        <div className="text-gray-400 line-through text-lg">${price.toFixed(2)}</div>
        <div className="text-4xl font-bold text-emerald-700 my-2">${final_.toFixed(2)}</div>
        <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">You save ${saved.toFixed(2)}</div>
      </div>
    </div>
  );
}
