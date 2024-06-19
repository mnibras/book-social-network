/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';

import {approveReturnBorrowedBook, ApproveReturnBorrowedBook$Params} from '../fn/book/approve-return-borrowed-book';
import {BookResponse} from '../models/book-response';
import {borrowBook, BorrowBook$Params} from '../fn/book/borrow-book';
import {findAllBooks, FindAllBooks$Params} from '../fn/book/find-all-books';
import {findAllBooksByOwner, FindAllBooksByOwner$Params} from '../fn/book/find-all-books-by-owner';
import {findAllBorrowedBooks, FindAllBorrowedBooks$Params} from '../fn/book/find-all-borrowed-books';
import {findAllReturnedBooks, FindAllReturnedBooks$Params} from '../fn/book/find-all-returned-books';
import {findBookById, FindBookById$Params} from '../fn/book/find-book-by-id';
import {PageResponseBookResponse} from '../models/page-response-book-response';
import {PageResponseBorrowedBookResponse} from '../models/page-response-borrowed-book-response';
import {returnBorrowedBook, ReturnBorrowedBook$Params} from '../fn/book/return-borrowed-book';
import {saveBook, SaveBook$Params} from '../fn/book/save-book';
import {updateArchiveStatus, UpdateArchiveStatus$Params} from '../fn/book/update-archive-status';
import {updateShareableStatus, UpdateShareableStatus$Params} from '../fn/book/update-shareable-status';
import {uploadBookCoverPicture, UploadBookCoverPicture$Params} from '../fn/book/upload-book-cover-picture';

@Injectable({providedIn: 'root'})
export class BookService extends BaseService {
    /** Path part for operation `findAllBooks()` */
    static readonly FindAllBooksPath = '/books';
    /** Path part for operation `saveBook()` */
    static readonly SaveBookPath = '/books';
    /** Path part for operation `uploadBookCoverPicture()` */
    static readonly UploadBookCoverPicturePath = '/books/cover/{book-id}';
    /** Path part for operation `borrowBook()` */
    static readonly BorrowBookPath = '/books/borrow/{book-id}';
    /** Path part for operation `updateShareableStatus()` */
    static readonly UpdateShareableStatusPath = '/books/shareable/{book-id}';
    /** Path part for operation `returnBorrowedBook()` */
    static readonly ReturnBorrowedBookPath = '/books/borrow/return/{book-id}';
    /** Path part for operation `approveReturnBorrowedBook()` */
    static readonly ApproveReturnBorrowedBookPath = '/books/borrow/return/approve/{book-id}';
    /** Path part for operation `updateArchiveStatus()` */
    static readonly UpdateArchiveStatusPath = '/books/archived/{book-id}';
    /** Path part for operation `findBookById()` */
    static readonly FindBookByIdPath = '/books/{book-id}';
    /** Path part for operation `findAllReturnedBooks()` */
    static readonly FindAllReturnedBooksPath = '/books/returned';
    /** Path part for operation `findAllBooksByOwner()` */
    static readonly FindAllBooksByOwnerPath = '/books/owner';
    /** Path part for operation `findAllBorrowedBooks()` */
    static readonly FindAllBorrowedBooksPath = '/books/borrowed';

    constructor(config: ApiConfiguration, http: HttpClient) {
        super(config, http);
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `findAllBooks()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllBooks$Response(params?: FindAllBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
        return findAllBooks(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `findAllBooks$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllBooks(params?: FindAllBooks$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
        return this.findAllBooks$Response(params, context).pipe(
            map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `saveBook()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    saveBook$Response(params: SaveBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
        return saveBook(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `saveBook$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    saveBook(params: SaveBook$Params, context?: HttpContext): Observable<number> {
        return this.saveBook$Response(params, context).pipe(
            map((r: StrictHttpResponse<number>): number => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `uploadBookCoverPicture()` instead.
     *
     * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
     */
    uploadBookCoverPicture$Response(params: UploadBookCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{}>> {
        return uploadBookCoverPicture(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `uploadBookCoverPicture$Response()` instead.
     *
     * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
     */
    uploadBookCoverPicture(params: UploadBookCoverPicture$Params, context?: HttpContext): Observable<{}> {
        return this.uploadBookCoverPicture$Response(params, context).pipe(
            map((r: StrictHttpResponse<{}>): {} => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `borrowBook()` instead.
     *
     * This method doesn't expect any request body.
     */
    borrowBook$Response(params: BorrowBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
        return borrowBook(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `borrowBook$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    borrowBook(params: BorrowBook$Params, context?: HttpContext): Observable<number> {
        return this.borrowBook$Response(params, context).pipe(
            map((r: StrictHttpResponse<number>): number => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `updateShareableStatus()` instead.
     *
     * This method doesn't expect any request body.
     */
    updateShareableStatus$Response(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
        return updateShareableStatus(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `updateShareableStatus$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    updateShareableStatus(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<number> {
        return this.updateShareableStatus$Response(params, context).pipe(
            map((r: StrictHttpResponse<number>): number => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `returnBorrowedBook()` instead.
     *
     * This method doesn't expect any request body.
     */
    returnBorrowedBook$Response(params: ReturnBorrowedBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
        return returnBorrowedBook(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `returnBorrowedBook$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    returnBorrowedBook(params: ReturnBorrowedBook$Params, context?: HttpContext): Observable<number> {
        return this.returnBorrowedBook$Response(params, context).pipe(
            map((r: StrictHttpResponse<number>): number => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `approveReturnBorrowedBook()` instead.
     *
     * This method doesn't expect any request body.
     */
    approveReturnBorrowedBook$Response(params: ApproveReturnBorrowedBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
        return approveReturnBorrowedBook(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `approveReturnBorrowedBook$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    approveReturnBorrowedBook(params: ApproveReturnBorrowedBook$Params, context?: HttpContext): Observable<number> {
        return this.approveReturnBorrowedBook$Response(params, context).pipe(
            map((r: StrictHttpResponse<number>): number => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `updateArchiveStatus()` instead.
     *
     * This method doesn't expect any request body.
     */
    updateArchiveStatus$Response(params: UpdateArchiveStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
        return updateArchiveStatus(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `updateArchiveStatus$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    updateArchiveStatus(params: UpdateArchiveStatus$Params, context?: HttpContext): Observable<number> {
        return this.updateArchiveStatus$Response(params, context).pipe(
            map((r: StrictHttpResponse<number>): number => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `findBookById()` instead.
     *
     * This method doesn't expect any request body.
     */
    findBookById$Response(params: FindBookById$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
        return findBookById(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `findBookById$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    findBookById(params: FindBookById$Params, context?: HttpContext): Observable<BookResponse> {
        return this.findBookById$Response(params, context).pipe(
            map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `findAllReturnedBooks()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllReturnedBooks$Response(params?: FindAllReturnedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
        return findAllReturnedBooks(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `findAllReturnedBooks$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllReturnedBooks(params?: FindAllReturnedBooks$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
        return this.findAllReturnedBooks$Response(params, context).pipe(
            map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `findAllBooksByOwner()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllBooksByOwner$Response(params?: FindAllBooksByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
        return findAllBooksByOwner(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `findAllBooksByOwner$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllBooksByOwner(params?: FindAllBooksByOwner$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
        return this.findAllBooksByOwner$Response(params, context).pipe(
            map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
        );
    }

    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `findAllBorrowedBooks()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllBorrowedBooks$Response(params?: FindAllBorrowedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
        return findAllBorrowedBooks(this.http, this.rootUrl, params, context);
    }

    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `findAllBorrowedBooks$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    findAllBorrowedBooks(params?: FindAllBorrowedBooks$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
        return this.findAllBorrowedBooks$Response(params, context).pipe(
            map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
        );
    }

}
