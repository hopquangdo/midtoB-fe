package com.example.StudyWithMe.services.socialmedia.like;

import com.example.StudyWithMe.models.socialmedia.like.Like;
import com.example.StudyWithMe.models.socialmedia.post.Post;

import java.util.List;

public interface ILikeService {
    Like likePost(Post post);
    void unlikePost(Post post);
    List<Like> getAllLikeForPost(Post post);
    void deleteAllLikeForPost(Post post);
}
