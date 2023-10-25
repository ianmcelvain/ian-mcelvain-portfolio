import gql from 'graphql-tag';

export const allUpdatesQuery = gql`
  query allUpdatesQuery {
    updates {
      data {
        id
        attributes {
          title
          excerpt
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }
          body
          publishedAt
          slug
        }
      }
    }
  }
`;

export const singleUpdateQuery = gql`
  query singleUpdateQuery {
    update(id: 1) {
      data {
        id
        attributes {
          title
          excerpt
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }
          body
          publishedAt
          slug
        }
      }
    }
  }
`;
