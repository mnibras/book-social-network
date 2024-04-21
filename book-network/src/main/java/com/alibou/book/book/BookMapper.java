package com.alibou.book.book;

import org.springframework.stereotype.Service;

@Service
public class BookMapper {

    public Book toBook(BookRequest bookRequest) {
        return Book.builder()
                .id(bookRequest.id())
                .title(bookRequest.title())
                .authorName(bookRequest.authorName())
                .synopsis(bookRequest.synopsis())
                .bookCover(bookRequest.bookCover())
                .archived(false)
                .shareable(bookRequest.shareable())
                .build();
    }

    public BookResponse toBookResponse(Book book) {
        return BookResponse.builder()
                .id(book.getId())
                .title(book.getTitle())
                .authorName(book.getAuthorName())
                .isbn(book.getIsbn())
                .synopsis(book.getSynopsis())
                .rate(book.getRating())
                .archived(book.isArchived())
                .shareable(book.isShareable())
                .owner(book.getOwner().getFirstname())
//                .cover() // todo implement
                .build();
    }
}
