// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Organizations extends APIResource {
  /**
   * Get the license information for the organization
   */
  getLicense(options?: RequestOptions): APIPromise<OrganizationGetLicenseResponse> {
    return this._client.get('/ee/organizations/license', options);
  }
}

/**
 * Pydantic model for license validation
 */
export interface OrganizationGetLicenseResponse {
  customer: string;

  expires_at: string;

  /**
   * Check if the license has expired
   */
  is_expired: boolean;

  license_id: string;

  organization_uuid: string;

  /**
   * License tier enum.
   */
  tier: 0 | 1 | 2 | 3;
}

export declare namespace Organizations {
  export { type OrganizationGetLicenseResponse as OrganizationGetLicenseResponse };
}
