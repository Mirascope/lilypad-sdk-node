// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GitHubAPI from '../auth/github';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UserOrganizations extends APIResource {
  /**
   * Create user organization
   */
  create(body: UserOrganizationCreateParams, options?: RequestOptions): APIPromise<UserOrganizationTable> {
    return this._client.post('/ee/user-organizations', { body, ...options });
  }

  /**
   * Updates user organization
   */
  update(
    userOrganizationUuid: string,
    body: UserOrganizationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UserOrganizationTable> {
    return this._client.patch(path`/ee/user-organizations/${userOrganizationUuid}`, { body, ...options });
  }

  /**
   * Delete user organization by uuid
   */
  delete(userOrganizationUuid: string, options?: RequestOptions): APIPromise<UserOrganizationDeleteResponse> {
    return this._client.delete(path`/ee/user-organizations/${userOrganizationUuid}`, options);
  }

  /**
   * Get all user organizations.
   */
  getUserOrganizations(options?: RequestOptions): APIPromise<UserOrganizationGetUserOrganizationsResponse> {
    return this._client.get('/ee/user-organizations', options);
  }

  /**
   * Get all users of an organization.
   */
  getUsers(options?: RequestOptions): APIPromise<UserOrganizationGetUsersResponse> {
    return this._client.get('/ee/user-organizations/users', options);
  }
}

/**
 * UserOrganization table.
 */
export interface UserOrganizationTable {
  organization_uuid: string;

  /**
   * User role enum.
   */
  role: UserRole;

  user_uuid: string;

  created_at?: string;

  uuid?: string | null;
}

/**
 * User role enum.
 */
export type UserRole = 'owner' | 'admin' | 'member';

export type UserOrganizationDeleteResponse = boolean;

export type UserOrganizationGetUserOrganizationsResponse = Array<UserOrganizationTable>;

export type UserOrganizationGetUsersResponse = Array<GitHubAPI.UserPublic>;

export interface UserOrganizationCreateParams {
  token: string;
}

export interface UserOrganizationUpdateParams {
  /**
   * User role enum.
   */
  role: UserRole;
}

export declare namespace UserOrganizations {
  export {
    type UserOrganizationTable as UserOrganizationTable,
    type UserRole as UserRole,
    type UserOrganizationDeleteResponse as UserOrganizationDeleteResponse,
    type UserOrganizationGetUserOrganizationsResponse as UserOrganizationGetUserOrganizationsResponse,
    type UserOrganizationGetUsersResponse as UserOrganizationGetUsersResponse,
    type UserOrganizationCreateParams as UserOrganizationCreateParams,
    type UserOrganizationUpdateParams as UserOrganizationUpdateParams,
  };
}
