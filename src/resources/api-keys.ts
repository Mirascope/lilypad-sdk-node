// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EnvironmentsAPI from './environments';
import * as GitHubAPI from './auth/github';
import * as ProjectsAPI from './projects/projects';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create an API key and returns the full key.
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/api-keys', { body, ...options });
  }

  /**
   * Get an API keys.
   */
  list(options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get('/api-keys', options);
  }

  /**
   * Delete an API key.
   */
  delete(apiKeyUuid: string, options?: RequestOptions): APIPromise<APIKeyDeleteResponse> {
    return this._client.delete(path`/api-keys/${apiKeyUuid}`, options);
  }
}

export type APIKeyCreateResponse = string;

export type APIKeyListResponse = Array<APIKeyListResponse.APIKeyListResponseItem>;

export namespace APIKeyListResponse {
  /**
   * API key public model
   */
  export interface APIKeyListResponseItem {
    /**
     * Environment public model.
     */
    environment: EnvironmentsAPI.EnvironmentPublic;

    key_hash: string;

    name: string;

    /**
     * Project Public Model.
     */
    project: ProjectsAPI.ProjectPublic;

    project_uuid: string;

    /**
     * User public model
     */
    user: GitHubAPI.UserPublic;

    uuid: string;

    environment_uuid?: string | null;

    expires_at?: string;
  }
}

export type APIKeyDeleteResponse = boolean;

export interface APIKeyCreateParams {
  name: string;

  project_uuid: string;

  environment_uuid?: string | null;

  expires_at?: string;

  key_hash?: string | null;
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
  };
}
