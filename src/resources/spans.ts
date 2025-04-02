// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Spans extends APIResource {
  /**
   * Get span by uuid.
   */
  retrieve(spanUuid: string, options?: RequestOptions): APIPromise<SpanMoreDetails> {
    return this._client.get(path`/spans/${spanUuid}`, options);
  }
}

/**
 * Span more details model.
 */
export interface SpanMoreDetails {
  data: unknown;

  display_name: string;

  messages: Array<SpanMoreDetails.Message>;

  model: string;

  provider: string;

  uuid: string;

  arg_values?: unknown | null;

  code?: string | null;

  cost?: number | null;

  duration_ms?: number | null;

  events?: Array<SpanMoreDetails.Event> | null;

  function_uuid?: string | null;

  input_tokens?: number | null;

  output?: string | null;

  output_tokens?: number | null;

  project_uuid?: string | null;

  signature?: string | null;

  status?: string | null;

  template?: string | null;
}

export namespace SpanMoreDetails {
  /**
   * Message param model agnostic to providers.
   */
  export interface Message {
    content: Array<Message._AudioPart | Message._TextPart | Message._ImagePart | Message._ToolCall>;

    role: string;
  }

  export namespace Message {
    /**
     * Image part model.
     */
    export interface _AudioPart {
      audio: string;

      media_type: string;

      type: 'audio';
    }

    /**
     * Text part model.
     */
    export interface _TextPart {
      text: string;

      type: 'text';
    }

    /**
     * Image part model.
     */
    export interface _ImagePart {
      detail: string | null;

      image: string;

      media_type: string;

      type: 'image';
    }

    /**
     * Image part model.
     */
    export interface _ToolCall {
      arguments: unknown;

      name: string;

      type: 'tool_call';
    }
  }

  /**
   * Event model.
   */
  export interface Event {
    message: string;

    name: string;

    timestamp: string;

    type: string;
  }
}

export declare namespace Spans {
  export { type SpanMoreDetails as SpanMoreDetails };
}
