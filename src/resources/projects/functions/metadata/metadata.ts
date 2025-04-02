// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as NamesAPI from './names';
import { NameListLatestVersionsResponse, NameListResponse, Names } from './names';

export class Metadata extends APIResource {
  names: NamesAPI.Names = new NamesAPI.Names(this._client);
}

Metadata.Names = Names;

export declare namespace Metadata {
  export {
    Names as Names,
    type NameListResponse as NameListResponse,
    type NameListLatestVersionsResponse as NameListLatestVersionsResponse,
  };
}
