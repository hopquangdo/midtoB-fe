package com.example.StudyWithMe.repositories.socialmedia.post;

import com.example.StudyWithMe.models.socialmedia.post.Attachment;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AttachmentRepository extends JpaRepository<Attachment,Long> {
    @Modifying
    @Transactional
    @Query("DELETE FROM Attachment a WHERE a.post.postId = :postId")
    void deleteByPost(Long postId);
    @Query("SELECT a FROM Attachment a WHERE a.post.postId = :postId")
    List<Attachment> findAllByPostId(Long postId);
}
