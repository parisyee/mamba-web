import Account from '@/lib/types/account';

export default function AccountList({ accounts }: { accounts: Account[] }) {
  return (
    <ul>
      {accounts.map((account) => {
        return (
          <li key={account.id}>
            <div>{account.name}</div>
            <div>{account.total}</div>
          </li>
        );
      })}
    </ul>
  )
};