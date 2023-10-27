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
          category: update_category {
            data {
              attributes {
                title
                icon
                slug
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
  query singleUpdateQuery($id: ID!) {
    update(id: $id) {
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
          update_category {
            data {
              attributes {
                title
                icon
                slug
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

export const allProjectsQuery = gql`
  query allProjectsQuery {
    projects {
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
          status {
            data {
              id
              attributes {
                title
                slug
                icon
              }
            }
          }
          category: project_category {
            data {
              attributes {
                title
                icon
                slug
              }
            }
          }
          externalLink
        }
      }
    }
  }
`;

export const allProjectCategoiresQuery = gql`
  query allProjectCategoriesQuery {
    projectCategories {
      data {
        attributes {
          title
          slug
          icon
        }
      }
    }
  }
`;

export const allUpdateCategoiresQuery = gql`
  query allUpdateCategoriesQuery {
    updateCategories {
      data {
        attributes {
          title
          slug
          icon
        }
      }
    }
  }
`;
