// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NameAPI from './name';
import {
  CommonCallParams,
  FunctionPublic,
  Name,
  NameRetrieveByNameParams,
  NameRetrieveByNameResponse,
  NameRetrieveByVersionParams,
  NameRetrieveDeployedParams,
} from './name';
import * as SpansAPI from './spans';
import {
  AggregateMetrics,
  SpanListAggregatesParams,
  SpanListAggregatesResponse,
  SpanListParams,
  SpanListResponse,
  SpanPublic,
  Spans,
  TimeFrame,
} from './spans';
import * as MetadataAPI from './metadata/metadata';
import { Metadata } from './metadata/metadata';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Functions extends APIResource {
  name: NameAPI.Name = new NameAPI.Name(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  spans: SpansAPI.Spans = new SpansAPI.Spans(this._client);

  /**
   * Create a new function version.
   */
  create(
    projectUuid: string,
    body: FunctionCreateParams,
    options?: RequestOptions,
  ): APIPromise<NameAPI.FunctionPublic> {
    return this._client.post(path`/projects/${projectUuid}/functions`, { body, ...options });
  }

  /**
   * Grab function by UUID.
   */
  retrieve(
    functionUuid: string,
    params: FunctionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NameAPI.FunctionPublic> {
    const { project_uuid } = params;
    return this._client.get(path`/projects/${project_uuid}/functions/${functionUuid}`, options);
  }

  /**
   * Update a function.
   */
  update(
    functionUuid: string,
    params: FunctionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NameAPI.FunctionPublic> {
    const { project_uuid, ...body } = params;
    return this._client.patch(path`/projects/${project_uuid}/functions/${functionUuid}`, {
      body,
      ...options,
    });
  }

  /**
   * Grab all functions.
   */
  list(projectUuid: string, options?: RequestOptions): APIPromise<FunctionListResponse> {
    return this._client.get(path`/projects/${projectUuid}/functions`, options);
  }

  /**
   * Archive a function and delete spans by function UUID.
   */
  archive(
    functionUuid: string,
    params: FunctionArchiveParams,
    options?: RequestOptions,
  ): APIPromise<FunctionArchiveResponse> {
    const { project_uuid } = params;
    return this._client.delete(path`/projects/${project_uuid}/functions/${functionUuid}`, options);
  }

  /**
   * Archive a function by name and delete spans by function name.
   */
  archiveByName(
    functionName: string,
    params: FunctionArchiveByNameParams,
    options?: RequestOptions,
  ): APIPromise<FunctionArchiveByNameResponse> {
    const { project_uuid } = params;
    return this._client.delete(path`/projects/${project_uuid}/functions/names/${functionName}`, options);
  }

  /**
   * Get function by hash.
   */
  retrieveByHash(
    functionHash: string,
    params: FunctionRetrieveByHashParams,
    options?: RequestOptions,
  ): APIPromise<NameAPI.FunctionPublic> {
    const { project_uuid } = params;
    return this._client.get(path`/projects/${project_uuid}/functions/hash/${functionHash}`, options);
  }
}

export type FunctionListResponse = Array<NameAPI.FunctionPublic>;

export type FunctionArchiveResponse = boolean;

export type FunctionArchiveByNameResponse = boolean;

export interface FunctionCreateParams {
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

  dependencies?: Record<string, FunctionCreateParams.Dependencies>;

  is_versioned?: boolean | null;

  model?: string | null;

  body_project_uuid?: string | null;

  prompt_template?: string | null;

  provider?: string | null;

  version_num?: number | null;
}

export namespace FunctionCreateParams {
  /**
   * Dependency information.
   */
  export interface Dependencies {
    extras: Array<string> | null;

    version: string;
  }
}

export interface FunctionRetrieveParams {
  project_uuid: string;
}

export interface FunctionUpdateParams {
  project_uuid: string;
}

export interface FunctionArchiveParams {
  project_uuid: string;
}

export interface FunctionArchiveByNameParams {
  project_uuid: string;
}

export interface FunctionRetrieveByHashParams {
  project_uuid: string;
}

Functions.Name = Name;
Functions.Metadata = Metadata;
Functions.Spans = Spans;

export declare namespace Functions {
  export {
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
    Name as Name,
    type CommonCallParams as CommonCallParams,
    type FunctionPublic as FunctionPublic,
    type NameRetrieveByNameResponse as NameRetrieveByNameResponse,
    type NameRetrieveByNameParams as NameRetrieveByNameParams,
    type NameRetrieveByVersionParams as NameRetrieveByVersionParams,
    type NameRetrieveDeployedParams as NameRetrieveDeployedParams,
  };

  export { Metadata as Metadata };

  export {
    Spans as Spans,
    type AggregateMetrics as AggregateMetrics,
    type SpanPublic as SpanPublic,
    type TimeFrame as TimeFrame,
    type SpanListResponse as SpanListResponse,
    type SpanListAggregatesResponse as SpanListAggregatesResponse,
    type SpanListParams as SpanListParams,
    type SpanListAggregatesParams as SpanListAggregatesParams,
  };
}
