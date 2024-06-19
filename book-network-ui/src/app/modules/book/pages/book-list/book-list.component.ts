import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../../services/services/book.service';
import {PageResponseBookResponse} from '../../../../services/models/page-response-book-response';
import {Router} from '@angular/router';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
    bookResponse: PageResponseBookResponse = {};
    page = 0;
    size = 5;
    pages: any = [];
    message = '';
    level: 'success' | 'error' = 'success';

    constructor(
        private bookService: BookService,
        private router: Router
    ) {
    }

    get isLastPage() {
        return this.page === this.bookResponse.totalPages as number - 1;
    }

    ngOnInit(): void {
        this.findAllBooks();
    }

    gotToPage(page: number) {
        this.page = page;
        this.findAllBooks();
    }

    goToFirstPage() {
        this.page = 0;
        this.findAllBooks();
    }

    goToPreviousPage() {
        this.page--;
        this.findAllBooks();
    }

    goToLastPage() {
        this.page = this.bookResponse.totalPages as number - 1;
        this.findAllBooks();
    }

    goToNextPage() {
        this.page++;
        this.findAllBooks();
    }

    private findAllBooks() {
        this.bookService.findAllBooks({
            page: this.page,
            size: this.size
        })
            .subscribe({
                next: (books) => {
                    this.bookResponse = books;
                    this.pages = Array(this.bookResponse.totalPages)
                        .fill(0)
                        .map((x, i) => i);
                }
            });
    }
}
