'use client'

import { useState } from 'react';
import LineItem from './line_item';

export default function Account({ account }) {
  const [total, setTotal] = useState(account.total);
  const [lineItems, setLineItems] = useState(
    account.lineItems.sort((lineItem) => lineItem.position)
  );

  function updateTotal() {
    setTotal(lineItems.reduce((sum, lineItem) => sum + lineItem.amount, 0));
  };

  function deleteLineItem(id) {
    setLineItems(lineItems.filter((lineItem) => lineItem.id !== id));
  };

  function addNewLineItem(position) {
    const newPosition = position + 1;
    const newItem = createLineItem(newPosition);
    // Insert newItem at the specified position. The second parameter is 0, which means no items are removed.
    setLineItems((prevLineItems) => {
      const updatedLineItems = [...prevLineItems];
      updatedLineItems.splice(newPosition, 0, newItem);
      return updatedLineItems;
    });
  }

  function createLineItem(position) {
    return {
      id: Math.random(),
      name: "",
      quantity: 0,
      multiplier: 1,
      units: "",
      cost: 0,
      position: position,
    };
  }

  return (
    <div className="bg-slate-100 shadow-md rounded space-y-4">
      <div className="flex justify-between text-xl font-semibold px-4 py-4 border-b border-slate-800">
        <div>{account.name}</div>
        <div>${parseFloat(account.total/100.0)}</div>
      </div>
      <table className="container mx-auto table-auto">
        <thead>
          <tr>
            <th className="px-4 font-medium text-left">Name</th>
            <th className="px-4 font-medium text-left">Quantity</th>
            <th className="px-4 font-medium text-left">X</th>
            <th className="px-4 font-medium text-left">Units</th>
            <th className="px-4 font-medium text-left">Cost</th>
            <th className="px-4 font-medium text-left">Position</th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map((lineItem) => {
            return (
              <LineItem
                key={lineItem.id}
                lineItem={lineItem}
                onUpdate={() => { updateTotal() }}
                onDelete={() => { deleteLineItem(lineItem.id) }}
                addNewLineItem={() => { addNewLineItem(lineItem.position) }}  
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};