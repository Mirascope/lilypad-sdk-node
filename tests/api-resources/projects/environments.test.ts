// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Lilypad from 'lilypad-sdk';

const client = new Lilypad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource environments', () => {
  // skipped: tests are disabled for the time being
  test.skip('deploy: only required params', async () => {
    const responsePromise = client.projects.environments.deploy('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      function_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('deploy: required and optional params', async () => {
    const response = await client.projects.environments.deploy('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      function_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      notes: 'notes',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveActiveDeployment: only required params', async () => {
    const responsePromise = client.projects.environments.retrieveActiveDeployment(
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
  test.skip('retrieveActiveDeployment: required and optional params', async () => {
    const response = await client.projects.environments.retrieveActiveDeployment(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveActiveFunction: only required params', async () => {
    const responsePromise = client.projects.environments.retrieveActiveFunction(
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
  test.skip('retrieveActiveFunction: required and optional params', async () => {
    const response = await client.projects.environments.retrieveActiveFunction(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveDeploymentHistory: only required params', async () => {
    const responsePromise = client.projects.environments.retrieveDeploymentHistory(
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
  test.skip('retrieveDeploymentHistory: required and optional params', async () => {
    const response = await client.projects.environments.retrieveDeploymentHistory(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { project_uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });
});
