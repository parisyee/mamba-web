import AddIcon from '@mui/icons-material/Add';
import BudgetsList from "./budgets_list";
import { Button } from "@mui/material";
import Link from "next/link";

export default async function Page() {
    const res = await fetch('http://localhost:3000/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ budgets { id name total } }' }),
    });
    const json = await res.json();
    const budgets = json.data.budgets;

    return (
        <div>
            <div className="flex justify-end">
                <Link href="/budgets/new">
                    <Button variant="outlined" startIcon={<AddIcon />}>
                        Create Budget
                    </Button>
                </Link>
            </div>
            <div>
                <BudgetsList budgets={budgets} />
            </div>
        </div>
    );
};