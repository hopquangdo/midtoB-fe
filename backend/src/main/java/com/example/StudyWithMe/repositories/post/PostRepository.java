package com.example.StudyWithMe.repositories.post;

import com.example.StudyWithMe.models.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Long> {
}
