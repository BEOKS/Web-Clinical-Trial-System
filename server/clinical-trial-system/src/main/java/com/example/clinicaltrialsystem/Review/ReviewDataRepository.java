package com.example.clinicaltrialsystem.Review;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface ReviewDataRepository extends CrudRepository<ReviewData, Integer> {
    @Modifying
    @Query(
            value = "truncate table review_data",
            nativeQuery = true
    )
    @Transactional
    void truncate();
}
