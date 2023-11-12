import flatten from '~/utilities/flatten';

export function useBackend() {
  async function query(dataKey, query, params) {
    const graphql = useStrapiGraphQL();
    return await useAsyncData(dataKey, () => graphql(query, params)).then(
      ({ data }) => {
        return flatten(Object.values(data.value.data)[0]);
      }
    );
  }

  return {
    query,
  };
}
