// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Settings extends APIResource {
  /**
   * Get the configuration.
   */
  retrieve(options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get('/settings', options);
  }
}

export interface SettingRetrieveResponse {
  environment: string;

  experimental: boolean;

  github_client_id: string;

  google_client_id: string;

  remote_api_url: string;

  remote_client_url: string;
}

export declare namespace Settings {
  export { type SettingRetrieveResponse as SettingRetrieveResponse };
}
