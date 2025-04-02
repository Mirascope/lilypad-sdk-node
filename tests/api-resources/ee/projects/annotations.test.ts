// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lilypad from 'lilypad-sdk';

const client = new Lilypad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource annotations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.ee.projects.annotations.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body: [{}],
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
    const response = await client.ee.projects.annotations.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body: [
        {
          assigned_to: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          data: {},
          function_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          label: 'pass',
          project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          reasoning: 'reasoning',
          span_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          type: 'manual',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.ee.projects.annotations.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.ee.projects.annotations.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      assigned_to: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      data: {},
      label: 'pass',
      reasoning: 'reasoning',
      type: 'manual',
    });
  });
});
