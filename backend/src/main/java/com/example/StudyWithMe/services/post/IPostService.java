package com.example.StudyWithMe.services.post;

import com.example.StudyWithMe.dataTransferObjects.post.PostDTO;
import com.example.StudyWithMe.models.post.Post;
import com.example.StudyWithMe.responses.post.PostResponse;

import java.util.List;
public interface IPostService {
    PostResponse createPost(PostDTO postDTO);
    List<PostResponse> getAllPost();

    Post getPostDetail(Long postId);
}
