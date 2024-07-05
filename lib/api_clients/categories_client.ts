import { client } from '@/lib/apollo_client';
import { gql } from '@apollo/client';

export async function getCategories() {
  const res = await client.query({
    query: gql`
        query {
          categories {
            id
            name
            total
          }
        }
      `
  });
  return res.data.categories;
}
export async function getCategory(id) {
  const res = await client.query({
    query: gql`
        query getCategory($id: ID!) {
          category(id: $id) {
            id
            name
            total
          }
        }
      `,
    variables: { id }
  });
  return res.data.category;
}

export async function createCategory(category) {
  console.log('CATEGORY: ', category);
  const res = await client.mutate({
    mutation: gql`
        mutation CreateCategory($name: String!, $total: Int!, $budgetId: ID!) {
          createCategory(name: $name, total: $total, budgetId: $budgetId) {
            id
            name
            total
          }
        }
      `,
    variables: category
  });
  return res.data.createCategory;
}

export async function updateCategory(category) {
  const res = await client.mutate({
    mutation: gql`
        mutation UpdateCategory($id: ID!, $name: String, $total: Int) {
          updateCategory(id: $id, name: $name, total: $total) {
            id
            name
            total
          }
        }
      `,
    variables: category
  });
  return res.data.updateCategory;
}