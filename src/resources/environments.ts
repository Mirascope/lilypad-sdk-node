// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Environments extends APIResource {
  /**
   * Create a new environment.
   */
  create(body: EnvironmentCreateParams, options?: RequestOptions): APIPromise<EnvironmentPublic> {
    return this._client.post('/environments', { body, ...options });
  }

  /**
   * Get environment by UUID.
   */
  retrieve(environmentUuid: string, options?: RequestOptions): APIPromise<EnvironmentPublic> {
    return this._client.get(path`/environments/${environmentUuid}`, options);
  }

  /**
   * Get all environments for a project.
   */
  list(options?: RequestOptions): APIPromise<EnvironmentListResponse> {
    return this._client.get('/environments', options);
  }

  /**
   * Delete an environment.
   */
  delete(environmentUuid: string, options?: RequestOptions): APIPromise<EnvironmentDeleteResponse> {
    return this._client.delete(path`/environments/${environmentUuid}`, options);
  }
}

/**
 * Environment public model.
 */
export interface EnvironmentPublic {
  created_at: string;

  name: string;

  organization_uuid: string;

  uuid: string;

  description?: string | null;

  is_default?: boolean;
}

export type EnvironmentListResponse = Array<EnvironmentPublic>;

export type EnvironmentDeleteResponse = boolean;

export interface EnvironmentCreateParams {
  name: string;

  description?: string | null;

  is_default?: boolean;
}

export declare namespace Environments {
  export {
    type EnvironmentPublic as EnvironmentPublic,
    type EnvironmentListResponse as EnvironmentListResponse,
    type EnvironmentDeleteResponse as EnvironmentDeleteResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
  };
}
