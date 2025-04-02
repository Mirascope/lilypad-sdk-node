// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lilypad from 'lilypad-sdk';

const client = new Lilypad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  // skipped: tests are disabled for the time being
  test.skip('getAnnotations: only required params', async () => {
    const responsePromise = client.ee.projects.functions.getAnnotations(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getAnnotations: required and optional params', async () => {
    const response = await client.ee.projects.functions.getAnnotations(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('runPlayground: only required params', async () => {
    const responsePromise = client.ee.projects.functions.runPlayground(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        arg_values: { foo: 0 },
        model: 'model',
        provider: 'openai',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('runPlayground: required and optional params', async () => {
    const response = await client.ee.projects.functions.runPlayground(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        arg_values: { foo: 0 },
        model: 'model',
        provider: 'openai',
        function: {
          code: 'code',
          hash: 'hash',
          name: 'x',
          signature: 'signature',
          archived: '2019-12-27T18:11:19.117Z',
          arg_types: { foo: 'string' },
          call_params: {
            frequency_penalty: 0,
            max_tokens: 0,
            presence_penalty: 0,
            seed: 0,
            stop: 'string',
            temperature: 0,
            top_p: 0,
          },
          custom_id: 'custom_id',
          dependencies: { foo: { extras: ['string'], version: 'version' } },
          is_versioned: true,
          model: 'model',
          project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          prompt_template: 'prompt_template',
          provider: 'provider',
          version_num: 0,
        },
      },
    );
  });
});
