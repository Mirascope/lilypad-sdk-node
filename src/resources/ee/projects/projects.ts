// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnnotationsAPI from './annotations';
import {
  AnnotationCreateParams,
  AnnotationCreateResponse,
  AnnotationPublic,
  AnnotationUpdateParams,
  Annotations,
  EvaluationType,
  Label,
} from './annotations';
import * as FunctionsAPI from './functions';
import {
  FunctionGetAnnotationsParams,
  FunctionGetAnnotationsResponse,
  FunctionRunPlaygroundParams,
  FunctionRunPlaygroundResponse,
  Functions,
} from './functions';
import * as SpansAPI from './spans';
import { SpanGenerateAnnotationParams, SpanGenerateAnnotationResponse, Spans } from './spans';

export class Projects extends APIResource {
  annotations: AnnotationsAPI.Annotations = new AnnotationsAPI.Annotations(this._client);
  functions: FunctionsAPI.Functions = new FunctionsAPI.Functions(this._client);
  spans: SpansAPI.Spans = new SpansAPI.Spans(this._client);
}

Projects.Annotations = Annotations;
Projects.Functions = Functions;
Projects.Spans = Spans;

export declare namespace Projects {
  export {
    Annotations as Annotations,
    type AnnotationPublic as AnnotationPublic,
    type EvaluationType as EvaluationType,
    type Label as Label,
    type AnnotationCreateResponse as AnnotationCreateResponse,
    type AnnotationCreateParams as AnnotationCreateParams,
    type AnnotationUpdateParams as AnnotationUpdateParams,
  };

  export {
    Functions as Functions,
    type FunctionGetAnnotationsResponse as FunctionGetAnnotationsResponse,
    type FunctionRunPlaygroundResponse as FunctionRunPlaygroundResponse,
    type FunctionGetAnnotationsParams as FunctionGetAnnotationsParams,
    type FunctionRunPlaygroundParams as FunctionRunPlaygroundParams,
  };

  export {
    Spans as Spans,
    type SpanGenerateAnnotationResponse as SpanGenerateAnnotationResponse,
    type SpanGenerateAnnotationParams as SpanGenerateAnnotationParams,
  };
}
