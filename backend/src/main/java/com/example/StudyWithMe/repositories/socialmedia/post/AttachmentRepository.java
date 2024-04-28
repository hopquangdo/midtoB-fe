package com.example.StudyWithMe.repositories.socialmedia.post;

import com.example.StudyWithMe.models.socialmedia.post.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttachmentRepository extends JpaRepository<Attachment,Long> {
}
