import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {BookListComponent} from "./pages/book-list/book-list.component";
import {MyBooksComponent} from "./pages/my-books/my-books.component";
import {ManageBookComponent} from "./pages/manage-book/manage-book.component";
import {BorrowedBookListComponent} from "./pages/borrowed-book-list/borrowed-book-list.component";
import {ReturnedBooksComponent} from "./pages/returned-books/returned-books.component";
import {authGuard} from "../../services/guard/auth.guard";

const routes: Routes = [
    {
        path: '', // root path of books module. Eg: http://localhost:4200/books
        component: MainComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '', // still url remain same for book list. Eg: http://localhost:4200/books
                component: BookListComponent,
                canActivate: [authGuard]
            },
            {
                path: 'my-books',
                component: MyBooksComponent,
                canActivate: [authGuard]
            },
            {
                path: 'manage',
                component: ManageBookComponent,
                canActivate: [authGuard]
            },
            {
                path: 'manage/:bookId',
                component: ManageBookComponent,
                canActivate: [authGuard]
            },
            {
                path: 'my-borrowed-books',
                component: BorrowedBookListComponent,
                canActivate: [authGuard]
            },
            {
                path: 'my-returned-books',
                component: ReturnedBooksComponent,
                canActivate: [authGuard]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule {
}
