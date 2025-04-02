// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Spans extends APIResource {
  /**
   * Stream function.
   */
  generateAnnotation(
    spanUuid: string,
    params: SpanGenerateAnnotationParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { project_uuid } = params;
    return this._client.get(
      path`/ee/projects/${project_uuid}/spans/${spanUuid}/generate-annotation`,
      options,
    );
  }
}

export type SpanGenerateAnnotationResponse = unknown;

export interface SpanGenerateAnnotationParams {
  project_uuid: string;
}

export declare namespace Spans {
  export {
    type SpanGenerateAnnotationResponse as SpanGenerateAnnotationResponse,
    type SpanGenerateAnnotationParams as SpanGenerateAnnotationParams,
  };
}
