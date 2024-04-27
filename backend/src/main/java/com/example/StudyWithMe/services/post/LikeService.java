package com.example.StudyWithMe.services.post;

import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.models.post.Like;
import com.example.StudyWithMe.models.post.Post;
import com.example.StudyWithMe.repositories.post.LikeRepository;
import com.example.StudyWithMe.responses.like.LikeResponse;
import com.example.StudyWithMe.services.auth.IAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LikeService implements ILikeService {
    private final LikeRepository likeRepository;
    private final IAuthService authService;
    private final IPostService postService;
    @Override
    public Like likePost(Long postId) {
        User existingUser = authService.getUserDetail();
        Post existingPost = postService.getPostDetail(postId);
        Like newLike = Like.builder()
                .post(existingPost)
                .user(existingUser)
                .build();
        likeRepository.save(newLike);
        return newLike;
    }

    @Override
    public void unlikePost(Long postId) {
        User existingUser = authService.getUserDetail();
        Post existingPost = postService.getPostDetail(postId);
        likeRepository.deleteByUserAndPost(existingUser,existingPost);
    }
    @Override
    public long getTotalLikeForPost(Long postId) {
        return likeRepository.countByPostId(postId);
    }
}
