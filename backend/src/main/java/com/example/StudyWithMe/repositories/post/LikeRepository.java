package com.example.StudyWithMe.repositories.post;

import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.models.post.Like;
import com.example.StudyWithMe.models.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LikeRepository extends JpaRepository<Like,Long> {
    @Query("SELECT COUNT(l) FROM Like l WHERE l.post.postId = :postId")
    long countByPostId(Long postId);
    void deleteByUserAndPost(User user, Post post);
}
