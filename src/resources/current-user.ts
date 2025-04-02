// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GitHubAPI from './auth/github';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CurrentUser extends APIResource {
  /**
   * Get user.
   */
  retrieve(options?: RequestOptions): APIPromise<GitHubAPI.UserPublic> {
    return this._client.get('/current-user', options);
  }
}
