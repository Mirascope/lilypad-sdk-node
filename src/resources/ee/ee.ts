// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationsAPI from './organizations';
import { OrganizationGetLicenseResponse, Organizations } from './organizations';
import * as UserOrganizationsAPI from './user-organizations';
import {
  UserOrganizationCreateParams,
  UserOrganizationDeleteResponse,
  UserOrganizationGetUserOrganizationsResponse,
  UserOrganizationGetUsersResponse,
  UserOrganizationTable,
  UserOrganizationUpdateParams,
  UserOrganizations,
  UserRole,
} from './user-organizations';
import * as ProjectsAPI from './projects/projects';
import { Projects } from './projects/projects';

export class Ee extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  userOrganizations: UserOrganizationsAPI.UserOrganizations = new UserOrganizationsAPI.UserOrganizations(
    this._client,
  );
}

Ee.Projects = Projects;
Ee.Organizations = Organizations;
Ee.UserOrganizations = UserOrganizations;

export declare namespace Ee {
  export { Projects as Projects };

  export {
    Organizations as Organizations,
    type OrganizationGetLicenseResponse as OrganizationGetLicenseResponse,
  };

  export {
    UserOrganizations as UserOrganizations,
    type UserOrganizationTable as UserOrganizationTable,
    type UserRole as UserRole,
    type UserOrganizationDeleteResponse as UserOrganizationDeleteResponse,
    type UserOrganizationGetUserOrganizationsResponse as UserOrganizationGetUserOrganizationsResponse,
    type UserOrganizationGetUsersResponse as UserOrganizationGetUsersResponse,
    type UserOrganizationCreateParams as UserOrganizationCreateParams,
    type UserOrganizationUpdateParams as UserOrganizationUpdateParams,
  };
}
