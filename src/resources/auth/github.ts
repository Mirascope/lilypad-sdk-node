// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from '../organizations';
import * as UserOrganizationsAPI from '../ee/user-organizations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class GitHub extends APIResource {
  /**
   * Callback for GitHub OAuth.
   *
   * Saves the user and organization or retrieves the user after authenticating with
   * GitHub.
   */
  callback(query: GitHubCallbackParams, options?: RequestOptions): APIPromise<UserPublic> {
    return this._client.get('/auth/github/callback', { query, ...options });
  }
}

/**
 * User public model
 */
export interface UserPublic {
  email: string;

  first_name: string;

  uuid: string;

  access_token?: string | null;

  active_organization_uuid?: string | null;

  keys?: Record<string, string>;

  last_name?: string | null;

  scopes?: Array<string>;

  user_organizations?: Array<UserPublic.UserOrganization> | null;
}

export namespace UserPublic {
  /**
   * UserOrganization public model
   */
  export interface UserOrganization {
    /**
     * Organization public model
     */
    organization: OrganizationsAPI.OrganizationPublic;

    organization_uuid: string;

    /**
     * User role enum.
     */
    role: UserOrganizationsAPI.UserRole;

    user_uuid: string;

    uuid: string;
  }
}

export interface GitHubCallbackParams {
  code: string;
}

export declare namespace GitHub {
  export { type UserPublic as UserPublic, type GitHubCallbackParams as GitHubCallbackParams };
}
