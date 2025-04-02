// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Organizations extends APIResource {
  /**
   * Update an organization.
   */
  update(body: OrganizationUpdateParams, options?: RequestOptions): APIPromise<OrganizationPublic> {
    return this._client.patch('/organizations', { body, ...options });
  }
}

/**
 * Organization public model
 */
export interface OrganizationPublic {
  name: string;

  uuid: string;
}

export interface OrganizationUpdateParams {
  license?: string | null;

  name?: string | null;
}

export declare namespace Organizations {
  export {
    type OrganizationPublic as OrganizationPublic,
    type OrganizationUpdateParams as OrganizationUpdateParams,
  };
}
