import flatten from '~/utilities/flatten';

export function useBackend() {
  const graphql = useStrapiGraphQL();

  async function query(gql, params = {}) {
    return await graphql(gql, params).then(({ data }) => {
      return flatten(Object.values(data)[0]);
    });
  }

  return {
    query,
  };
}
