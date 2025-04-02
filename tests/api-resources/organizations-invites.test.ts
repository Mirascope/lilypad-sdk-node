// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lilypad from 'lilypad-sdk';

const client = new Lilypad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizationsInvites', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.organizationsInvites.create({
      email: 'x',
      invited_by: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.organizationsInvites.create({
      email: 'x',
      invited_by: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      token: 'token',
      expires_at: '2019-12-27T18:11:19.117Z',
      organization_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      resend_email_id: 'resend_email_id',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.organizationsInvites.retrieve('invite_token');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
