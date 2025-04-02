// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnnotationsAPI from '../../ee/projects/annotations';
import * as NameAPI from './name';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Spans extends APIResource {
  /**
   * Get span by uuid.
   */
  list(functionUuid: string, params: SpanListParams, options?: RequestOptions): APIPromise<SpanListResponse> {
    const { project_uuid } = params;
    return this._client.get(path`/projects/${project_uuid}/functions/${functionUuid}/spans`, options);
  }

  /**
   * Get aggregated span by function uuid.
   */
  listAggregates(
    functionUuid: string,
    params: SpanListAggregatesParams,
    options?: RequestOptions,
  ): APIPromise<SpanListAggregatesResponse> {
    const { project_uuid, ...query } = params;
    return this._client.get(path`/projects/${project_uuid}/functions/${functionUuid}/spans/metadata`, {
      query,
      ...options,
    });
  }
}

/**
 * Aggregated metrics for spans
 */
export interface AggregateMetrics {
  average_duration_ms: number;

  end_date: string | null;

  function_uuid: string | null;

  span_count: number;

  start_date: string | null;

  total_cost: number;

  total_input_tokens: number;

  total_output_tokens: number;
}

/**
 * Span public model
 */
export interface SpanPublic {
  annotations: Array<SpanPublic.Annotation>;

  child_spans: Array<SpanPublic>;

  created_at: string;

  project_uuid: string;

  /**
   * Instrumentation Scope name of the span
   */
  scope: 'lilypad' | 'llm';

  span_id: string;

  uuid: string;

  cost?: number | null;

  data?: unknown;

  display_name?: string | null;

  duration_ms?: number | null;

  /**
   * Function public model.
   */
  function?: NameAPI.FunctionPublic | null;

  function_uuid?: string | null;

  input_tokens?: number | null;

  output_tokens?: number | null;

  parent_span_id?: string | null;

  status?: string | null;

  /**
   * Span type
   */
  type?: 'function' | 'trace' | null;

  version?: number | null;
}

export namespace SpanPublic {
  /**
   * Annotation table.
   */
  export interface Annotation {
    organization_uuid: string;

    assigned_to?: string | null;

    created_at?: string;

    data?: unknown | null;

    function_uuid?: string | null;

    /**
     * Label enum
     */
    label?: AnnotationsAPI.Label | null;

    project_uuid?: string | null;

    reasoning?: string | null;

    span_uuid?: string | null;

    /**
     * Evaluation type enum
     */
    type?: AnnotationsAPI.EvaluationType | null;

    uuid?: string | null;
  }
}

/**
 * Timeframe for aggregation
 */
export type TimeFrame = 'day' | 'week' | 'month' | 'lifetime';

export type SpanListResponse = Array<SpanPublic>;

export type SpanListAggregatesResponse = Array<AggregateMetrics>;

export interface SpanListParams {
  project_uuid: string;
}

export interface SpanListAggregatesParams {
  /**
   * Path param:
   */
  project_uuid: string;

  /**
   * Query param: Timeframe for aggregation
   */
  time_frame: TimeFrame;
}

export declare namespace Spans {
  export {
    type AggregateMetrics as AggregateMetrics,
    type SpanPublic as SpanPublic,
    type TimeFrame as TimeFrame,
    type SpanListResponse as SpanListResponse,
    type SpanListAggregatesResponse as SpanListAggregatesResponse,
    type SpanListParams as SpanListParams,
    type SpanListAggregatesParams as SpanListAggregatesParams,
  };
}
