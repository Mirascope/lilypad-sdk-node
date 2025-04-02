// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GitHubAPI from './auth/github';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OrganizationsInvites extends APIResource {
  /**
   * Create an organization invite.
   */
  create(body: OrganizationsInviteCreateParams, options?: RequestOptions): APIPromise<OrganizationInvite> {
    return this._client.post('/organizations-invites', { body, ...options });
  }

  /**
   * Get an organization invite.
   */
  retrieve(inviteToken: string, options?: RequestOptions): APIPromise<OrganizationInvite> {
    return this._client.get(path`/organizations-invites/${inviteToken}`, options);
  }
}

/**
 * OrganizationInvite public model
 */
export interface OrganizationInvite {
  email: string;

  invited_by: string;

  organization_uuid: string;

  resend_email_id: string;

  /**
   * User public model
   */
  user: GitHubAPI.UserPublic;

  uuid: string;

  expires_at?: string;

  invite_link?: string | null;
}

export interface OrganizationsInviteCreateParams {
  email: string;

  invited_by: string;

  token?: string | null;

  expires_at?: string;

  organization_uuid?: string | null;

  resend_email_id?: string | null;
}

export declare namespace OrganizationsInvites {
  export {
    type OrganizationInvite as OrganizationInvite,
    type OrganizationsInviteCreateParams as OrganizationsInviteCreateParams,
  };
}
