import { useState } from 'react';

interface Item { name: string; value: number; }

export default function NetWorth() {
  const [assets, setAssets] = useState<Item[]>([{name:'Savings',value:20000},{name:'Investments',value:50000},{name:'Home',value:300000}]);
  const [liabilities, setLiabilities] = useState<Item[]>([{name:'Mortgage',value:200000},{name:'Student Loans',value:15000}]);

  const totalA = assets.reduce((s,a) => s+a.value, 0);
  const totalL = liabilities.reduce((s,l) => s+l.value, 0);
  const net = totalA - totalL;

  const update = (list: Item[], setList: Function, i: number, field: string, val: any) => { const n=[...list]; (n[i] as any)[field]=val; setList(n); };
  const add = (list: Item[], setList: Function) => setList([...list, {name:'',value:0}]);
  const remove = (list: Item[], setList: Function, i: number) => setList(list.filter((_,j) => j!==i));

  const Section = ({title,items,setItems,color}:{title:string;items:Item[];setItems:Function;color:string}) => (
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      {items.map((item,i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input type="text" value={item.name} onChange={e => update(items,setItems,i,'name',e.target.value)} placeholder="Name" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" />
          <input type="number" value={item.value} onChange={e => update(items,setItems,i,'value',+e.target.value)} className="w-28 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono" />
          <button onClick={() => remove(items,setItems,i)} className="text-red-400 px-2">✕</button>
        </div>
      ))}
      <button onClick={() => add(items,setItems)} className={`text-sm ${color}`}>+ Add</button>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className={`rounded-2xl p-6 text-center text-white ${net>=0?'bg-emerald-900':'bg-red-700'}`}>
        <div className="text-sm opacity-80">Net Worth</div>
        <div className="text-5xl font-bold">${net.toLocaleString()}</div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Section title="💰 Assets" items={assets} setItems={setAssets} color="text-emerald-600" />
        <Section title="💳 Liabilities" items={liabilities} setItems={setLiabilities} color="text-red-500" />
      </div>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-emerald-50 rounded-xl p-3"><div className="text-xl font-bold text-emerald-700">${totalA.toLocaleString()}</div><div className="text-xs text-gray-500">Total Assets</div></div>
        <div className="bg-red-50 rounded-xl p-3"><div className="text-xl font-bold text-red-600">${totalL.toLocaleString()}</div><div className="text-xs text-gray-500">Total Liabilities</div></div>
      </div>
    </div>
  );
}
