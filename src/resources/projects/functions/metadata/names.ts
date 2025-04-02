// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as NameAPI from '../name';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Names extends APIResource {
  /**
   * Get all unique function names.
   */
  list(projectUuid: string, options?: RequestOptions): APIPromise<NameListResponse> {
    return this._client.get(path`/projects/${projectUuid}/functions/metadata/names`, options);
  }

  /**
   * Get all unique function names.
   */
  listLatestVersions(
    projectUuid: string,
    options?: RequestOptions,
  ): APIPromise<NameListLatestVersionsResponse> {
    return this._client.get(path`/projects/${projectUuid}/functions/metadata/names/versions`, options);
  }
}

export type NameListResponse = Array<string>;

export type NameListLatestVersionsResponse = Array<NameAPI.FunctionPublic>;

export declare namespace Names {
  export {
    type NameListResponse as NameListResponse,
    type NameListLatestVersionsResponse as NameListLatestVersionsResponse,
  };
}
