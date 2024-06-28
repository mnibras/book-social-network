/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import {PageResponseFeedbackResponse} from "../models/page-response-feedback-response";
import {findAllFeedbackByBook, FindAllFeedbackByBook$Params} from "../fn/feedback/find-all-feedback-by-book";

@Injectable({ providedIn: 'root' })
export class FeedbackService extends BaseService {
    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /** Path part for operation `saveFeedback()` */
    static readonly SaveFeedbackPath = '/feedbacks';

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `saveFeedback()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    // saveFeedback$Response(params: SaveFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    //     return saveFeedback(this.http, this.rootUrl, params, context);
    // }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `saveFeedback$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    // saveFeedback(params: SaveFeedback$Params, context?: HttpContext): Observable<number> {
    //     return this.saveFeedback$Response(params, context).pipe(
    //         map((r: StrictHttpResponse<number>): number => r.body)
    //     );
    // }

    /** Path part for operation `findAllFeedbacksByBook()` */
    static readonly FindAllFeedbacksByBookPath = '/feedbacks/book/{book-id}';

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `findAllFeedbacksByBook()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllFeedbacksByBook$Response(params: FindAllFeedbackByBook$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseFeedbackResponse>> {
        return findAllFeedbackByBook(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `findAllFeedbacksByBook$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllFeedbacksByBook(params: FindAllFeedbackByBook$Params, context?: HttpContext): Observable<PageResponseFeedbackResponse> {
        return this.findAllFeedbacksByBook$Response(params, context).pipe(
            map((r: StrictHttpResponse<PageResponseFeedbackResponse>): PageResponseFeedbackResponse => r.body)
        );
    }

}
