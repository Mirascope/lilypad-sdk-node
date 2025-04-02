// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EnvironmentsAPI from './environments';
import {
  DeploymentPublic,
  EnvironmentDeployParams,
  EnvironmentRetrieveActiveDeploymentParams,
  EnvironmentRetrieveActiveFunctionParams,
  EnvironmentRetrieveDeploymentHistoryParams,
  EnvironmentRetrieveDeploymentHistoryResponse,
  Environments,
} from './environments';
import * as SpansAPI from './spans';
import { SpanListAggregatesParams, SpanListAggregatesResponse, Spans } from './spans';
import * as TracesAPI from './traces';
import { TraceCreateResponse, TraceListResponse, Traces } from './traces';
import * as FunctionsAPI from './functions/functions';
import {
  FunctionArchiveByNameParams,
  FunctionArchiveByNameResponse,
  FunctionArchiveParams,
  FunctionArchiveResponse,
  FunctionCreateParams,
  FunctionListResponse,
  FunctionRetrieveByHashParams,
  FunctionRetrieveParams,
  FunctionUpdateParams,
  Functions,
} from './functions/functions';
import * as NameAPI from './functions/name';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  spans: SpansAPI.Spans = new SpansAPI.Spans(this._client);
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);

  /**
   * Create a project
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectPublic> {
    return this._client.post('/projects', { body, ...options });
  }

  /**
   * Get a project.
   */
  retrieve(projectUuid: string, options?: RequestOptions): APIPromise<ProjectPublic> {
    return this._client.get(path`/projects/${projectUuid}`, options);
  }

  /**
   * Update a project.
   */
  update(
    projectUuid: string,
    body: ProjectUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProjectPublic> {
    return this._client.patch(path`/projects/${projectUuid}`, { body, ...options });
  }

  /**
   * Get all projects.
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/projects', options);
  }

  /**
   * Delete a project
   */
  delete(projectUuid: string, options?: RequestOptions): APIPromise<ProjectDeleteResponse> {
    return this._client.delete(path`/projects/${projectUuid}`, options);
  }

  /**
   * Create a managed function.
   */
  createVersionedFunction(
    projectUuid: string,
    body: ProjectCreateVersionedFunctionParams,
    options?: RequestOptions,
  ): APIPromise<NameAPI.FunctionPublic> {
    return this._client.post(path`/projects/${projectUuid}/versioned-functions`, { body, ...options });
  }
}

/**
 * Function create model.
 */
export interface FunctionCreate {
  code: string;

  hash: string;

  name: string;

  signature: string;

  archived?: string | null;

  arg_types?: Record<string, string>;

  /**
   * Common parameters shared across LLM providers.
   *
   * Note: Each provider may handle these parameters differently or not support them
   * at all. Please check provider-specific documentation for parameter support and
   * behavior.
   *
   * Attributes: temperature: Controls randomness in the output (0.0 to 1.0).
   * max_tokens: Maximum number of tokens to generate. top_p: Nucleus sampling
   * parameter (0.0 to 1.0). frequency_penalty: Penalizes frequent tokens (-2.0 to
   * 2.0). presence_penalty: Penalizes tokens based on presence (-2.0 to 2.0). seed:
   * Random seed for reproducibility. stop: Stop sequence(s) to end generation.
   */
  call_params?: NameAPI.CommonCallParams;

  custom_id?: string | null;

  dependencies?: Record<string, FunctionCreate.Dependencies>;

  is_versioned?: boolean | null;

  model?: string | null;

  project_uuid?: string | null;

  prompt_template?: string | null;

  provider?: string | null;

  version_num?: number | null;
}

export namespace FunctionCreate {
  /**
   * Dependency information.
   */
  export interface Dependencies {
    extras: Array<string> | null;

    version: string;
  }
}

/**
 * Project Create Model.
 */
export interface ProjectCreate {
  name: string;
}

/**
 * Project Public Model.
 */
export interface ProjectPublic {
  created_at: string;

  name: string;

  uuid: string;

  functions?: Array<NameAPI.FunctionPublic>;
}

export type ProjectListResponse = Array<ProjectPublic>;

export type ProjectDeleteResponse = boolean;

export interface ProjectCreateParams {
  name: string;
}

export interface ProjectUpdateParams {
  name: string;
}

export interface ProjectCreateVersionedFunctionParams {
  code: string;

  hash: string;

  name: string;

  signature: string;

  archived?: string | null;

  arg_types?: Record<string, string>;

  /**
   * Common parameters shared across LLM providers.
   *
   * Note: Each provider may handle these parameters differently or not support them
   * at all. Please check provider-specific documentation for parameter support and
   * behavior.
   *
   * Attributes: temperature: Controls randomness in the output (0.0 to 1.0).
   * max_tokens: Maximum number of tokens to generate. top_p: Nucleus sampling
   * parameter (0.0 to 1.0). frequency_penalty: Penalizes frequent tokens (-2.0 to
   * 2.0). presence_penalty: Penalizes tokens based on presence (-2.0 to 2.0). seed:
   * Random seed for reproducibility. stop: Stop sequence(s) to end generation.
   */
  call_params?: NameAPI.CommonCallParams;

  custom_id?: string | null;

  dependencies?: Record<string, ProjectCreateVersionedFunctionParams.Dependencies>;

  is_versioned?: boolean | null;

  model?: string | null;

  body_project_uuid?: string | null;

  prompt_template?: string | null;

  provider?: string | null;

  version_num?: number | null;
}

export namespace ProjectCreateVersionedFunctionParams {
  /**
   * Dependency information.
   */
  export interface Dependencies {
    extras: Array<string> | null;

    version: string;
  }
}

Projects.Functions = Functions;
Projects.Spans = Spans;
Projects.Traces = Traces;
Projects.Environments = Environments;

export declare namespace Projects {
  export {
    type FunctionCreate as FunctionCreate,
    type ProjectCreate as ProjectCreate,
    type ProjectPublic as ProjectPublic,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectCreateVersionedFunctionParams as ProjectCreateVersionedFunctionParams,
  };

  export {
    Functions as Functions,
    type FunctionListResponse as FunctionListResponse,
    type FunctionArchiveResponse as FunctionArchiveResponse,
    type FunctionArchiveByNameResponse as FunctionArchiveByNameResponse,
    type FunctionCreateParams as FunctionCreateParams,
    type FunctionRetrieveParams as FunctionRetrieveParams,
    type FunctionUpdateParams as FunctionUpdateParams,
    type FunctionArchiveParams as FunctionArchiveParams,
    type FunctionArchiveByNameParams as FunctionArchiveByNameParams,
    type FunctionRetrieveByHashParams as FunctionRetrieveByHashParams,
  };

  export {
    Spans as Spans,
    type SpanListAggregatesResponse as SpanListAggregatesResponse,
    type SpanListAggregatesParams as SpanListAggregatesParams,
  };

  export {
    Traces as Traces,
    type TraceCreateResponse as TraceCreateResponse,
    type TraceListResponse as TraceListResponse,
  };

  export {
    Environments as Environments,
    type DeploymentPublic as DeploymentPublic,
    type EnvironmentRetrieveDeploymentHistoryResponse as EnvironmentRetrieveDeploymentHistoryResponse,
    type EnvironmentDeployParams as EnvironmentDeployParams,
    type EnvironmentRetrieveActiveDeploymentParams as EnvironmentRetrieveActiveDeploymentParams,
    type EnvironmentRetrieveActiveFunctionParams as EnvironmentRetrieveActiveFunctionParams,
    type EnvironmentRetrieveDeploymentHistoryParams as EnvironmentRetrieveDeploymentHistoryParams,
  };
}
