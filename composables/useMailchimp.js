import jsonp from 'jsonp';
import { validate } from 'email-validator';

export function useMailchimp() {
  const MailchimpStatus = Object.freeze({
    SUCCESS: 'success',
  });

  /**
   * Make a jsonp request to user's mailchimp list
   *  `param` object avoids CORS issues
   *  timeout to 3.5s so user isn't waiting forever
   *  usually occurs w/ privacy plugins enabled
   *  3.5s is a bit longer than the time it would take on a Slow 3G connection
   *
   * @param {String} url - concatenated string of user's gatsby-config.js
   *  options, along with any MC list fields as query params.
   *
   * @return {Promise} - a promise that resolves a data object
   *  or rejects an error object
   */

  function subscribeEmailToMailchimp({ url, timeout }) {
    return new Promise((resolve, reject) =>
      jsonp(url, { param: 'c', timeout }, (err, data) => {
        if (err) reject(err);
        if (data) resolve(data);
      })
    );
  }

  /**
   * Build a query string of MC list fields
   *
   * @param {Object} fields - a list of mailchimp audience field labels
   *  and their values. We uppercase because that's what MC requires.
   *  NOTE: GROUPS stay as lowercase (ex: MC uses group field names as `group[21269]`)
   *
   * @return {String} - `&FIELD1=value1&FIELD2=value2&group[21265][2]=group1`
   */
  function convertListFields(fields) {
    let queryParams = '';
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        // If this is a list group, not user field then keep lowercase, as per MC reqs
        // https://github.com/benjaminhoffman/gatsby-plugin-mailchimp/blob/master/README.md#groups
        const fieldTransformed =
          field.substring(0, 6) === 'group[' ? field : field.toUpperCase();
        queryParams = queryParams.concat(
          `&${fieldTransformed}=${fields[field]}`
        );
      }
    }
    return queryParams;
  }

  /**
   * Adds an email to the newsletter list.
   *
   * @param {string} email - The email address to add.
   * @param {Object} fields - Additional data fields to associate with the email address.
   * @param {string} endpointOverride - Optional override for the newsletter endpoint.
   */
  function addToNewsletter(email, fields, endpointOverride) {
    const isEmailValid = validate(email);
    const emailEncoded = encodeURIComponent(email);
    if (!isEmailValid) {
      return Promise.resolve({
        result: 'error',
        msg: 'The email you entered is not valid.',
      });
    }

    let endpoint =
      'https://ianmcelvain.us8.list-manage.com/subscribe/post?u=e7692bdd97e4ee4f988f767cd&amp;id=5b856bb52a&amp;f_id=00717ce0f0';  
    const timeout = 3000;  

    // The following tests for whether you passed in a `fields` object. If
    // there are only two params and the second is a string, then we can safely
    // assume the second param is a MC mailing list, and not a fields object.
    if (arguments.length < 3 && typeof fields === 'string') {
      endpoint = fields;
    } else if (typeof endpointOverride === 'string') {
      endpoint = endpointOverride;
    }

    // Generates MC endpoint for our jsonp request. We have to
    // change `/post` to `/post-json` otherwise, MC returns an error
    endpoint = endpoint.replace(/\/post/g, '/post-json');
    const queryParams = `&EMAIL=${emailEncoded}${convertListFields(fields)}`;
    const url = `${endpoint}${queryParams}`;

    return subscribeEmailToMailchimp({ url, timeout });
  }

  return {
    addToNewsletter,
    MailchimpStatus,
  };
}
