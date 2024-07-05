import { FormData } from 'next/types'
import { TextField, Button } from '@mui/material'
import { redirect } from 'next/navigation'
import { raw } from '@prisma/client/runtime/library'

export default function Page() {
  async function createBudget(formData: FormData) {
    'use server'
 
    const rawFormData = {
      name: formData.get('name')
    }
    console.log("rawFormData: ", rawFormData)
 
    const res = await fetch('http://localhost:3000/api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          mutation CreateBudget($name: String!) {
            createBudget(name: $name) {
              id
              name
              total
            }
          }`,
        variables: { ...rawFormData }
      })
    });

    const json = await res.json();
    const id = json.data.createBudget.id;

    redirect(`/budgets/${id}`)
  }

  return (
    <div>
      <h1>New Budget</h1>
      <form action={createBudget}>
        <TextField name="name" label="Name" />
        <Button type="submit">Create Budget</Button>
      </form>
    </div>
  );
}