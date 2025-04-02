// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FunctionsSpansAPI from './functions/spans';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Spans extends APIResource {
  /**
   * Get aggregated span by project uuid.
   */
  listAggregates(
    projectUuid: string,
    query: SpanListAggregatesParams,
    options?: RequestOptions,
  ): APIPromise<SpanListAggregatesResponse> {
    return this._client.get(path`/projects/${projectUuid}/spans/metadata`, { query, ...options });
  }
}

export type SpanListAggregatesResponse = Array<FunctionsSpansAPI.AggregateMetrics>;

export interface SpanListAggregatesParams {
  /**
   * Timeframe for aggregation
   */
  time_frame: FunctionsSpansAPI.TimeFrame;
}

export declare namespace Spans {
  export {
    type SpanListAggregatesResponse as SpanListAggregatesResponse,
    type SpanListAggregatesParams as SpanListAggregatesParams,
  };
}
