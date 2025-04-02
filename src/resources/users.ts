// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GitHubAPI from './auth/github';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Update users active organization uuid.
   */
  updateActiveOrganization(
    activeOrganizationUuid: string,
    options?: RequestOptions,
  ): APIPromise<GitHubAPI.UserPublic> {
    return this._client.put(path`/users/${activeOrganizationUuid}`, options);
  }

  /**
   * Update users keys.
   */
  updateKeys(params: UserUpdateKeysParams, options?: RequestOptions): APIPromise<GitHubAPI.UserPublic> {
    const { body } = params;
    return this._client.patch('/users', { body: body, ...options });
  }
}

export interface UserUpdateKeysParams {
  body: unknown;
}

export declare namespace Users {
  export { type UserUpdateKeysParams as UserUpdateKeysParams };
}
