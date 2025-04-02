// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Name extends APIResource {
  /**
   * Get function by name.
   */
  retrieveByName(
    functionName: string,
    params: NameRetrieveByNameParams,
    options?: RequestOptions,
  ): APIPromise<NameRetrieveByNameResponse> {
    const { project_uuid } = params;
    return this._client.get(path`/projects/${project_uuid}/functions/name/${functionName}`, options);
  }

  /**
   * Get function by name.
   */
  retrieveByVersion(
    versionNum: number,
    params: NameRetrieveByVersionParams,
    options?: RequestOptions,
  ): APIPromise<FunctionPublic> {
    const { project_uuid, function_name } = params;
    return this._client.get(
      path`/projects/${project_uuid}/functions/name/${function_name}/version/${versionNum}`,
      options,
    );
  }

  /**
   * Get the deployed function by function name and environment name.
   */
  retrieveDeployed(
    functionName: string,
    params: NameRetrieveDeployedParams,
    options?: RequestOptions,
  ): APIPromise<FunctionPublic> {
    const { project_uuid } = params;
    return this._client.get(
      path`/projects/${project_uuid}/functions/name/${functionName}/environments`,
      options,
    );
  }
}

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
export interface CommonCallParams {
  frequency_penalty?: number | null;

  max_tokens?: number | null;

  presence_penalty?: number | null;

  seed?: number | null;

  stop?: string | Array<string> | null;

  temperature?: number | null;

  top_p?: number | null;
}

/**
 * Function public model.
 */
export interface FunctionPublic {
  code: string;

  hash: string;

  name: string;

  signature: string;

  uuid: string;

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
  call_params?: CommonCallParams;

  custom_id?: string | null;

  dependencies?: Record<string, FunctionPublic.Dependencies>;

  is_versioned?: boolean | null;

  model?: string | null;

  project_uuid?: string | null;

  prompt_template?: string | null;

  provider?: string | null;

  version_num?: number | null;
}

export namespace FunctionPublic {
  /**
   * Dependency information.
   */
  export interface Dependencies {
    extras: Array<string> | null;

    version: string;
  }
}

export type NameRetrieveByNameResponse = Array<FunctionPublic>;

export interface NameRetrieveByNameParams {
  project_uuid: string;
}

export interface NameRetrieveByVersionParams {
  project_uuid: string;

  function_name: string;
}

export interface NameRetrieveDeployedParams {
  project_uuid: string;
}

export declare namespace Name {
  export {
    type CommonCallParams as CommonCallParams,
    type FunctionPublic as FunctionPublic,
    type NameRetrieveByNameResponse as NameRetrieveByNameResponse,
    type NameRetrieveByNameParams as NameRetrieveByNameParams,
    type NameRetrieveByVersionParams as NameRetrieveByVersionParams,
    type NameRetrieveDeployedParams as NameRetrieveDeployedParams,
  };
}
