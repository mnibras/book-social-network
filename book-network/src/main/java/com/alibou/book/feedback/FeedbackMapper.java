package com.alibou.book.feedback;

import com.alibou.book.book.Book;

import java.util.Objects;

public class FeedbackMapper {

    public Feedback toFeedback(FeedbackRequest feedbackRequest) {
        return Feedback.builder()
                .note(feedbackRequest.getNote())
                .comment(feedbackRequest.getComment())
                .book(Book.builder()
                        .id(feedbackRequest.getBookId())
                        .build())
                .build();
    }

    public FeedbackResponse toFeedbackResponse(Feedback feedback, Integer userId) {
        return FeedbackResponse.builder()
                .note(feedback.getNote())
                .comment(feedback.getComment())
                .ownFeedback(Objects.equals(feedback.getCreatedBy(), userId))
                .build();
    }
}
