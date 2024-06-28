package com.alibou.book.book;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookRequest {

        private Integer id;

        @NotNull(message = "Title is required")
        @NotEmpty(message = "Title is required")
        private String title;

        @NotNull(message = "Author name is required")
        @NotEmpty(message = "Author name is required")
        private String authorName;

        @NotNull(message = "ISBN is required")
        @NotEmpty(message = "ISBN is required")
        private String isbn;

        @NotNull(message = "Synopsis is required")
        @NotEmpty(message = "Synopsis is required")
        private String synopsis;

        private boolean archived;
        private boolean shareable;

}

