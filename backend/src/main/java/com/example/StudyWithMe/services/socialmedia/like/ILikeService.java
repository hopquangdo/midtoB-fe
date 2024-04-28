package com.example.StudyWithMe.services.socialmedia.like;

import com.example.StudyWithMe.models.socialmedia.like.Like;

public interface ILikeService {
    Like likePost(Long postId);
    void unlikePost(Long postId);
    long getTotalLikeForPost(Long postId);
    void deleteAllLikeForPost(Long postId);
}
