import Link from "next/link";
import { Button } from "@mui/material";

export default function BudgetsListItem({ budgets }) {
    return (
        budgets.map((budget) => {
            return (
                <div key={budget.id} className="flex justify-between border-b border-gray-200 py-4">
                    <div>
                        <Link href={`/budgets/${budget.id}`}>
                            <h2 className="text-lg font-semibold">{budget.name}</h2>
                            <p className="text-sm text-gray-500">{budget.total}</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={`/budgets/${budget.id}/edit`}>
                            <Button variant="text">Edit</Button>
                        </Link>
                    </div>
                </div>
            );
        })
    );
}