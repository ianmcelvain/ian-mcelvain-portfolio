import gql from 'graphql-tag';

export const allUpdatesQuery = gql`
  query allUpdatesQuery {
    updates(sort: "publishedAt:DESC") {
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
          tags {
            data {
              attributes {
                title
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
  query singleUpdateQuery($slug: String!) {
    update(slug: $slug) {
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

export const singleProjectQuery = gql`
  query singleProjectQuery($slug: String!) {
    project(slug: $slug) {
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
          category: project_category {
            data {
              attributes {
                title
                icon
                slug
              }
            }
          }
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
          body
          startedAt
          slug
          externalLink
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
