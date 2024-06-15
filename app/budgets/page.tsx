import BudgetsList from "./budgets_list";

export default async function Page() {
    // const budgets = await fetch("/api/budgets").then((res) => res.json());

    const budgets = [
        {
            id: 1,
            imageUrl: "https://avatar.iran.liara.run/public/32",
            projectName: "Project 1",
            title: "Project 1 title",
            total: "$1000",
            lastModified: "2 hours ago",
            lastModifiedDateTime: "2022-01-01T00:00:00Z",
            position: 1
        },
        {
            id: 2,
            imageUrl: "https://avatar.iran.liara.run/public/79",
            projectName: "Project 2",
            title: "Project 2 title",
            total: "$2000",
            lastModified: "3 hours ago",
            lastModifiedDateTime: "2022-01-01T00:00:00Z",
            position: 2
        },
        {
            id: 3,
            imageUrl: "https://avatar.iran.liara.run/public/97",
            projectName: "Project 3",
            title: "Project 3 title",
            total: "$3000",
            lastModified: "4 hours ago",
            lastModifiedDateTime: "2022-01-01T00:00:00Z",
            position: 3
        }
    ]

    return (
        <div>
            <BudgetsList budgets={budgets} />
        </div>
    );
};