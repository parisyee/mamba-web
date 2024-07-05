'use client'

import { useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

import { redirect } from 'next/navigation'

import { createCategory, updateCategory } from '@/lib/api_clients/categories_client';

export default function BudgetCategories({ budget }) {

  const [categories, setCategories] = useState(budget.categories);

  const handleCellEditCommit = async (updatedRow, _originalRow) => {
    return await updateCategory(updatedRow);
  };

  const handleAddCategory = async () => {
    const categoryData = { name: '', total: 0, budgetId: budget.id };
    const newCategory = await createCategory(categoryData);
    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold">Categories</h2>
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddCategory}>
          Add Category
        </Button>
      </div>
      <DataGrid
        rows={categories}
        editMode='row'
        columns={[
          { field: 'name', headerName: 'Name', width: 400, editable: true },
          { field: 'total', headerName: 'Total', width: 150, editable: true, type: 'number' },
        ]}
        autoHeight
        processRowUpdate={handleCellEditCommit}
        onProcessRowUpdateError={(error) => console.error('Error updating row: ', error)}
      />
    </div>
  );
}