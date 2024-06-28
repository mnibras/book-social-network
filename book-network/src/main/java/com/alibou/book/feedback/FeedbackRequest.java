package com.alibou.book.feedback;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackRequest {

    @Positive(message = "Feedback note is required")
    @Min(value = 0, message = "Feedback note minimum value is 0")
    @Max(value = 5, message = "Feedback note maximum value is 5")
    private Double note;

    @NotNull(message = "Feedback comment is required")
    @NotEmpty(message = "Feedback comment is required")
    @NotBlank(message = "Feedback comment is required")
    private String comment;

    @NotNull(message = "Book is required for feedback")
    private Integer bookId;

}
