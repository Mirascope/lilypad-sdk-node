// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SpansAPI from './functions/spans';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Traces extends APIResource {
  /**
   * Create span traces.
   */
  create(projectUuid: string, options?: RequestOptions): APIPromise<TraceCreateResponse> {
    return this._client.post(path`/projects/${projectUuid}/traces`, options);
  }

  /**
   * Get all traces.
   *
   * Child spans are not lazy loaded to avoid N+1 queries.
   */
  list(projectUuid: string, options?: RequestOptions): APIPromise<TraceListResponse> {
    return this._client.get(path`/projects/${projectUuid}/traces`, options);
  }
}

export type TraceCreateResponse = Array<SpansAPI.SpanPublic>;

export type TraceListResponse = Array<SpansAPI.SpanPublic>;

export declare namespace Traces {
  export { type TraceCreateResponse as TraceCreateResponse, type TraceListResponse as TraceListResponse };
}
