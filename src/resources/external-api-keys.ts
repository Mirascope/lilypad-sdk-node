// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ExternalAPIKeys extends APIResource {
  /**
   * Store an external API key for a given service.
   */
  create(body: ExternalAPIKeyCreateParams, options?: RequestOptions): APIPromise<ExternalAPIKeyPublic> {
    return this._client.post('/external-api-keys', { body, ...options });
  }

  /**
   * Retrieve an external API key for a given service.
   */
  retrieve(serviceName: string, options?: RequestOptions): APIPromise<ExternalAPIKeyPublic> {
    return this._client.get(path`/external-api-keys/${serviceName}`, options);
  }

  /**
   * List all external API keys for the user with masked values.
   */
  list(options?: RequestOptions): APIPromise<ExternalAPIKeyListResponse> {
    return this._client.get('/external-api-keys', options);
  }

  /**
   * Delete an external API key for a given service.
   */
  delete(serviceName: string, options?: RequestOptions): APIPromise<ExternalAPIKeyDeleteResponse> {
    return this._client.delete(path`/external-api-keys/${serviceName}`, options);
  }
}

/**
 * Response model for a secret.
 */
export interface ExternalAPIKeyPublic {
  /**
   * Partially masked API key
   */
  masked_api_key: string;

  service_name: string;
}

export type ExternalAPIKeyListResponse = Array<ExternalAPIKeyPublic>;

export type ExternalAPIKeyDeleteResponse = boolean;

export interface ExternalAPIKeyCreateParams {
  api_key: string;

  service_name: string;
}

export declare namespace ExternalAPIKeys {
  export {
    type ExternalAPIKeyPublic as ExternalAPIKeyPublic,
    type ExternalAPIKeyListResponse as ExternalAPIKeyListResponse,
    type ExternalAPIKeyDeleteResponse as ExternalAPIKeyDeleteResponse,
    type ExternalAPIKeyCreateParams as ExternalAPIKeyCreateParams,
  };
}
