// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnnotationsAPI from './annotations';
import * as SpansAPI from '../../spans';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Annotations extends APIResource {
  /**
   * Create an annotation.
   *
   * Args: project_uuid: The project UUID. annotations_service: The annotation
   * service. annotations_create: The annotation create model.
   *
   * Returns: AnnotationPublic: The created annotation.
   *
   * Raises: HTTPException: If the span has already been assigned to a user and has
   * not been labeled yet.
   */
  create(
    projectUuid: string,
    params: AnnotationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AnnotationCreateResponse> {
    const { body } = params;
    return this._client.post(path`/ee/projects/${projectUuid}/annotations`, { body: body, ...options });
  }

  /**
   * Update an annotation.
   */
  update(
    annotationUuid: string,
    params: AnnotationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AnnotationPublic> {
    const { project_uuid, ...body } = params;
    return this._client.patch(path`/ee/projects/${project_uuid}/annotations/${annotationUuid}`, {
      body,
      ...options,
    });
  }
}

/**
 * Annotation public model.
 */
export interface AnnotationPublic {
  assigned_to: string | null;

  function_uuid: string;

  project_uuid: string;

  /**
   * Span more details model.
   */
  span: SpansAPI.SpanMoreDetails;

  span_uuid: string;

  uuid: string;

  data?: unknown | null;

  /**
   * Label enum
   */
  label?: Label | null;

  reasoning?: string | null;

  /**
   * Evaluation type enum
   */
  type?: EvaluationType | null;
}

/**
 * Evaluation type enum
 */
export type EvaluationType = 'manual' | 'verified' | 'edited';

/**
 * Label enum
 */
export type Label = 'pass' | 'fail';

export type AnnotationCreateResponse = Array<AnnotationPublic>;

export interface AnnotationCreateParams {
  body: Array<AnnotationCreateParams.Body>;
}

export namespace AnnotationCreateParams {
  /**
   * Annotation create model.
   */
  export interface Body {
    assigned_to?: Array<string> | null;

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
  }
}

export interface AnnotationUpdateParams {
  /**
   * Path param:
   */
  project_uuid: string;

  /**
   * Body param:
   */
  assigned_to?: string | null;

  /**
   * Body param:
   */
  data?: unknown | null;

  /**
   * Body param: Label enum
   */
  label?: Label | null;

  /**
   * Body param:
   */
  reasoning?: string | null;

  /**
   * Body param: Evaluation type enum
   */
  type?: EvaluationType | null;
}

export declare namespace Annotations {
  export {
    type AnnotationPublic as AnnotationPublic,
    type EvaluationType as EvaluationType,
    type Label as Label,
    type AnnotationCreateResponse as AnnotationCreateResponse,
    type AnnotationCreateParams as AnnotationCreateParams,
    type AnnotationUpdateParams as AnnotationUpdateParams,
  };
}
