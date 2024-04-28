package com.example.StudyWithMe.repositories.socialmedia.like;

import com.example.StudyWithMe.models.user.auth.User;
import com.example.StudyWithMe.models.socialmedia.like.Like;
import com.example.StudyWithMe.models.socialmedia.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LikeRepository extends JpaRepository<Like,Long> {
    @Query("SELECT COUNT(l) FROM Like l WHERE l.post.postId = :postId")
    long countByPostId(Long postId);
    void deleteByUserAndPost(User user, Post post);
    @Query("DELETE l FROM Like l WHERE l.post.postId = :postId")
    void deleteAllLikeForPost(Long postId);
}
