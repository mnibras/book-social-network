package com.alibou.book.history;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookTransactionHistoryRepository extends JpaRepository<BookTransactionHistory, Integer> {

    @Query("""
            SELECT bth
            FROM BookTransactionHistory bth
            WHERE bth.user.id = :userId
            """)
    Page<BookTransactionHistory> findAllBorrowedBooks(Pageable pageable, Integer userId);

    @Query("""
            SELECT bth
            FROM BookTransactionHistory bth
            WHERE bth.book.owner.id = :userId
            """)
    Page<BookTransactionHistory> findAllReturnedBooks(Pageable pageable, Integer userId);

    @Query("""
            SELECT (COUNT (*) > 0) AS isBorrowed
            FROM BookTransactionHistory bth
            WHERE bth.user.id = :userId AND bth.book.id = :bookId AND bth.returnedApproved = false
            """)
    boolean isAlreadyBorrowedByUser(Integer bookId, Integer userId);

    @Query("""
            SELECT bth
            FROM BookTransactionHistory bth
            WHERE bth.user.id = :userId AND bth.book.id = :bookId AND bth.returned = false AND bth.returnedApproved = false
            """)
    Optional<BookTransactionHistory> findByBookIdAndUserId(Integer bookId, Integer userId);

    @Query("""
            SELECT bth
            FROM BookTransactionHistory bth
            WHERE bth.book.owner.id = :userId AND bth.book.id = :bookId AND bth.returned = true AND bth.returnedApproved = false
            """)
    Optional<BookTransactionHistory> findByBookIdAndOwnerId(Integer bookId, Integer userId);

}
