// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnvironmentsAPI from '../environments';
import * as NameAPI from './functions/name';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Environments extends APIResource {
  /**
   * Deploy a function to an environment.
   */
  deploy(
    environmentUuid: string,
    params: EnvironmentDeployParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentPublic> {
    const { project_uuid, function_uuid, notes } = params;
    return this._client.post(path`/projects/${project_uuid}/environments/${environmentUuid}/deploy`, {
      query: { function_uuid, notes },
      ...options,
    });
  }

  /**
   * Get active deployment for an environment.
   */
  retrieveActiveDeployment(
    environmentUuid: string,
    params: EnvironmentRetrieveActiveDeploymentParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentPublic> {
    const { project_uuid } = params;
    return this._client.get(
      path`/projects/${project_uuid}/environments/${environmentUuid}/deployment`,
      options,
    );
  }

  /**
   * Get the currently active function for an environment.
   */
  retrieveActiveFunction(
    environmentUuid: string,
    params: EnvironmentRetrieveActiveFunctionParams,
    options?: RequestOptions,
  ): APIPromise<NameAPI.FunctionPublic> {
    const { project_uuid } = params;
    return this._client.get(
      path`/projects/${project_uuid}/environments/${environmentUuid}/function`,
      options,
    );
  }

  /**
   * Get deployment history for an environment.
   */
  retrieveDeploymentHistory(
    environmentUuid: string,
    params: EnvironmentRetrieveDeploymentHistoryParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentRetrieveDeploymentHistoryResponse> {
    const { project_uuid } = params;
    return this._client.get(path`/projects/${project_uuid}/environments/${environmentUuid}/history`, options);
  }
}

/**
 * Deployment public model.
 */
export interface DeploymentPublic {
  environment_uuid: string;

  function_uuid: string;

  organization_uuid: string;

  uuid: string;

  /**
   * Timestamp when the deployment was activated.
   */
  activated_at?: string;

  /**
   * Environment public model.
   */
  environment?: EnvironmentsAPI.EnvironmentPublic | null;

  /**
   * Function public model.
   */
  function?: NameAPI.FunctionPublic | null;

  is_active?: boolean;

  notes?: string | null;

  project_uuid?: string | null;

  version_num?: number;
}

export type EnvironmentRetrieveDeploymentHistoryResponse = Array<DeploymentPublic>;

export interface EnvironmentDeployParams {
  /**
   * Path param:
   */
  project_uuid: string;

  /**
   * Query param:
   */
  function_uuid: string;

  /**
   * Query param:
   */
  notes?: string | null;
}

export interface EnvironmentRetrieveActiveDeploymentParams {
  project_uuid: string;
}

export interface EnvironmentRetrieveActiveFunctionParams {
  project_uuid: string;
}

export interface EnvironmentRetrieveDeploymentHistoryParams {
  project_uuid: string;
}

export declare namespace Environments {
  export {
    type DeploymentPublic as DeploymentPublic,
    type EnvironmentRetrieveDeploymentHistoryResponse as EnvironmentRetrieveDeploymentHistoryResponse,
    type EnvironmentDeployParams as EnvironmentDeployParams,
    type EnvironmentRetrieveActiveDeploymentParams as EnvironmentRetrieveActiveDeploymentParams,
    type EnvironmentRetrieveActiveFunctionParams as EnvironmentRetrieveActiveFunctionParams,
    type EnvironmentRetrieveDeploymentHistoryParams as EnvironmentRetrieveDeploymentHistoryParams,
  };
}
