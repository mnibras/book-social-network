import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {BookListComponent} from "./pages/book-list/book-list.component";
import {MyBooksComponent} from "./pages/my-books/my-books.component";

const routes: Routes = [
    {
        path: '', // root path of books module. Eg: http://localhost:4200/books
        component: MainComponent,
        children: [
            {
                path: '', // still url remain same for book list. Eg: http://localhost:4200/books
                component: BookListComponent
            },
            {
                path: 'my-books',
                component: MyBooksComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule {
}
