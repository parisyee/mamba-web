import { client } from '@/lib/apollo_client';
import { gql } from '@apollo/client';

export async function getAccountsForCategory(categoryId) {
  const res = await client.query({
    query: gql`
        query accountsForCategory($categoryId: ID!) {
          categoryAccounts(categoryId: $categoryId) {
            id
            name
            total
            categoryId
            lineItems {
              id
              description
              quantity
              multiplier
              units
              rate
              accountId
            }
            
          }
        }
      `,
    variables: { categoryId }
  });
  return res.data.categoryAccounts;
}