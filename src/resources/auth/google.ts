// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GitHubAPI from './github';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Google extends APIResource {
  /**
   * Callback for Google OAuth.
   *
   * Saves the user and organization or retrieves the user after authenticating with
   * Google.
   */
  callback(query: GoogleCallbackParams, options?: RequestOptions): APIPromise<GitHubAPI.UserPublic> {
    return this._client.get('/auth/google/callback', { query, ...options });
  }
}

export interface GoogleCallbackParams {
  code: string;
}

export declare namespace Google {
  export { type GoogleCallbackParams as GoogleCallbackParams };
}
