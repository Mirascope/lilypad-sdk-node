// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lilypad from 'lilypad-sdk';

const client = new Lilypad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource name', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveByName: only required params', async () => {
    const responsePromise = client.projects.functions.name.retrieveByName('function_name', {
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
  test.skip('retrieveByName: required and optional params', async () => {
    const response = await client.projects.functions.name.retrieveByName('function_name', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByVersion: only required params', async () => {
    const responsePromise = client.projects.functions.name.retrieveByVersion(0, {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      function_name: 'function_name',
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
  test.skip('retrieveByVersion: required and optional params', async () => {
    const response = await client.projects.functions.name.retrieveByVersion(0, {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      function_name: 'function_name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveDeployed: only required params', async () => {
    const responsePromise = client.projects.functions.name.retrieveDeployed('function_name', {
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
  test.skip('retrieveDeployed: required and optional params', async () => {
    const response = await client.projects.functions.name.retrieveDeployed('function_name', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
