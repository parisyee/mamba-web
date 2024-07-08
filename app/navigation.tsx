import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-between text-l font-semibold tracking-tight">
      <div className="flex justify-start">
        <Link href="/budgets" className="mr-4">
          <Button variant="text">
            Budgets
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;