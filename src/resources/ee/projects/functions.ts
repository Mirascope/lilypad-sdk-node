// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectsAPI from '../../projects/projects';
import * as AnnotationsAPI from './annotations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Functions extends APIResource {
  /**
   * Get annotations by functions.
   */
  getAnnotations(
    functionUuid: string,
    params: FunctionGetAnnotationsParams,
    options?: RequestOptions,
  ): APIPromise<FunctionGetAnnotationsResponse> {
    const { project_uuid } = params;
    return this._client.get(
      path`/ee/projects/${project_uuid}/functions/${functionUuid}/annotations`,
      options,
    );
  }

  /**
   * Run playground version.
   */
  runPlayground(
    functionUuid: string,
    params: FunctionRunPlaygroundParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { project_uuid, ...body } = params;
    return this._client.post(path`/ee/projects/${project_uuid}/functions/${functionUuid}/playground`, {
      body,
      ...options,
    });
  }
}

export type FunctionGetAnnotationsResponse = Array<AnnotationsAPI.AnnotationPublic>;

export type FunctionRunPlaygroundResponse = string;

export interface FunctionGetAnnotationsParams {
  project_uuid: string;
}

export interface FunctionRunPlaygroundParams {
  /**
   * Path param:
   */
  project_uuid: string;

  /**
   * Body param:
   */
  arg_values: Record<string, number | boolean | string | Array<unknown> | unknown>;

  /**
   * Body param:
   */
  model: string;

  /**
   * Body param: Provider name enum
   */
  provider: 'openai' | 'anthropic' | 'openrouter' | 'gemini';

  /**
   * Body param: Function create model.
   */
  function?: ProjectsAPI.FunctionCreate | null;
}

export declare namespace Functions {
  export {
    type FunctionGetAnnotationsResponse as FunctionGetAnnotationsResponse,
    type FunctionRunPlaygroundResponse as FunctionRunPlaygroundResponse,
    type FunctionGetAnnotationsParams as FunctionGetAnnotationsParams,
    type FunctionRunPlaygroundParams as FunctionRunPlaygroundParams,
  };
}
