package com.example.StudyWithMe.services.post;

import com.example.StudyWithMe.models.post.Like;
import com.example.StudyWithMe.responses.like.LikeResponse;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ILikeService {
    Like likePost(Long postId);
    void unlikePost(Long postId);
    long getTotalLikeForPost(Long postId);
}
