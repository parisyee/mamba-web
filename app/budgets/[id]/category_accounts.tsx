import { useEffect, useState } from 'react';

import Category from '@/lib/types/category';
import { getAccountsForCategory } from '@/lib/api_clients/accounts_client'
import AccountsList from './accounts_list'

export default function CategoryAccounts({ category }: { category: Category }) {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccountsForCategory(category.id).then((accounts) => {
      setAccounts(accounts);
    }).catch((error) => {
      console.error(error);
    })
  }, [category.id]);

  return (
    <div className="py-4">
      <h2 className="text-xl font-bold">{category.name}</h2>
      <div className="pt-4">
        <AccountsList
          accounts={accounts}
          categoryID={category.id}
        />
      </div>
    </div>
  );
}