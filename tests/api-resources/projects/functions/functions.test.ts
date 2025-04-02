// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lilypad from 'lilypad-sdk';

const client = new Lilypad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.functions.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      code: 'code',
      hash: 'hash',
      name: 'x',
      signature: 'signature',
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
    const response = await client.projects.functions.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
      body_project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      prompt_template: 'prompt_template',
      provider: 'provider',
      version_num: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.functions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.projects.functions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.projects.functions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.projects.functions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.projects.functions.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('archive: only required params', async () => {
    const responsePromise = client.projects.functions.archive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
  test.skip('archive: required and optional params', async () => {
    const response = await client.projects.functions.archive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('archiveByName: only required params', async () => {
    const responsePromise = client.projects.functions.archiveByName('function_name', {
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
  test.skip('archiveByName: required and optional params', async () => {
    const response = await client.projects.functions.archiveByName('function_name', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByHash: only required params', async () => {
    const responsePromise = client.projects.functions.retrieveByHash('function_hash', {
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
  test.skip('retrieveByHash: required and optional params', async () => {
    const response = await client.projects.functions.retrieveByHash('function_hash', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
