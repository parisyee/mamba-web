import BudgetsList from "./budgets_list";
import { AppBar, Button } from "@mui/material";
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
            <AppBar position="static">
                <Link href="/budgets/new">
                    <Button color="inherit">Create Budget</Button>
                </Link>
            </AppBar>
            <BudgetsList budgets={budgets} />
        </div>
    );
};