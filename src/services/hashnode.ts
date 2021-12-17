export const GET_USER_ARTICLES = `
  query GetUserArticles($page: Int!) {
    user(username: "lucasamonrc") {
      publication {
        posts(page: $page) {
          title
          brief
          slug
          dateAdded
          coverImage
        }
      }
    }
  }
`;

export async function gql(query: string, variables={}) {
  const data = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          query,
          variables
      })
  });

  return data.json();
}