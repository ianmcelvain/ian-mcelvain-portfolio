'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.service('plugin::graphql.extension');
    extensionService.use(({ strapi }) => ({
      typeDefs: `
        type Query {
          update(slug: String!): UpdateEntityResponse
        },
        type Query {
          project(slug: String!): ProjectEntityResponse
        }
      `,
      resolvers: {
        Query: {
          update: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                'plugin::graphql.format'
              ).returnTypes;

              const data = await strapi.services['api::update.update'].find({
                filters: { slug: args.slug },
              });

              const response = toEntityResponse(data.results[0]);

              console.log('##################', response, '##################');

              return response;
            },
          },
          project: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                'plugin::graphql.format'
              ).returnTypes;

              const data = await strapi.services['api::project.project'].find({
                filters: { slug: args.slug },
              });

              const response = toEntityResponse(data.results[0]);

              console.log('##################', response, '##################');

              return response;
            },
          },
        },
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
