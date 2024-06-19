/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';

import {activate, Activate$Params} from '../fn/authentication/activate';
import {AuthenticationResponse} from '../models/authentication-response';
import {login, Login$Params} from '../fn/authentication/login';
import {register, Register$Params} from '../fn/authentication/register';

@Injectable({providedIn: 'root'})
export class AuthenticationService extends BaseService {
    /** Path part for operation `register()` */
    static readonly RegisterPath = '/auth/register';
    /** Path part for operation `login()` */
    static readonly LoginPath = '/auth/authenticate';
    /** Path part for operation `activate()` */
    static readonly ActivatePath = '/auth/activate-account';

    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `register()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<{}>> {
        return register(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `register$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    register(params: Register$Params, context?: HttpContext): Observable<{}> {
        return this.register$Response(params, context).pipe(
            map((r: StrictHttpResponse<{}>): {} => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `login()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    login$Response(params: Login$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
        return login(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `login$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    login(params: Login$Params, context?: HttpContext): Observable<AuthenticationResponse> {
        return this.login$Response(params, context).pipe(
            map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `activate()` instead.
     *
     * This method doesn't expect any request body.
     */
    activate$Response(params: Activate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
        return activate(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `activate$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    activate(params: Activate$Params, context?: HttpContext): Observable<void> {
        return this.activate$Response(params, context).pipe(
            map((r: StrictHttpResponse<void>): void => r.body)
        );
    }

}
