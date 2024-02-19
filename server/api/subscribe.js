import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

const listID = process.env.MAILCHIMP_AUDIENCE_ID;

function testEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
    email
  );
}

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email missing',
    });
  }

  if (!testEmail(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email',
    });
  }
  const response = await mailchimp.lists.setListMember(listID, email, {
    email_address: email,
    skip_merge_validation: true,
    status: 'subscribed',
  });

  return response;
});
