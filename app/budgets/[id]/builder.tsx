'use client'

import { useState } from 'react';

import BudgetDetails from './details';
import CategoriesList from './categories_list';
import CategoryAccounts from './category_accounts';
import { createCategory, destroyCategory } from '@/lib/api_clients/categories_client';

export default function BudgetBuilder({ budget }: { budget: Budget }) {
  const [selectedCategory, setSelectedCategory] = useState(budget.categories[0]);
  const [categories, setCategories] = useState(budget.categories)

  const addCategory = async () => {
    const newCategory = await createCategory({
      name: 'New Category',
      total: 0,
      budgetId: budget.id
    });
    setCategories([...categories, newCategory]);
  }

  const deleteCategory = async (categoryId) => {
    await destroyCategory(categoryId);
    const newCategories = categories.filter(c => c.id !== categoryId);
    setCategories(newCategories);
  }

  return (
    <div>
      <div className="px-8 pb-8 border-b-2">
        <BudgetDetails budget={budget} />
      </div>
      <div className="flex">
        <div className="px-4 border-r-2 w-1/3">
          <CategoriesList
            categories={categories}
            onSelectCategory={setSelectedCategory}
            onAddCategory={addCategory}
            onDeleteCategory={deleteCategory}
          />
        </div>
        <div className="px-4 w-2/3">
          <CategoryAccounts category={selectedCategory} />
        </div>
      </div>
    </div>
  )
}