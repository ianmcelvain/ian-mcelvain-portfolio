import flatten from '~/utilities/flatten';

export function useBackend() {
  async function query(dataKey, query, params = {}) {
    const graphql = useStrapiGraphQL();
    return await useAsyncData(dataKey, () => graphql(query, params))
      .then((response) => {
        return flatten(Object.values(response.data.value.data)[0]);
      })
      .catch((error) => {
        console.log('🚀 ~ file: useBackend.js:11 ~ query ~ error:', error);
      });
  }

  return {
    query,
  };
}
