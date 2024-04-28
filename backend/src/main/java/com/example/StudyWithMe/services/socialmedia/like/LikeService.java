package com.example.StudyWithMe.services.socialmedia.like;

import com.example.StudyWithMe.models.user.auth.User;
import com.example.StudyWithMe.models.socialmedia.like.Like;
import com.example.StudyWithMe.models.socialmedia.post.Post;
import com.example.StudyWithMe.repositories.socialmedia.like.LikeRepository;
import com.example.StudyWithMe.services.user.auth.IAuthService;
import com.example.StudyWithMe.services.socialmedia.post.IPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
    @Override
    public void deleteAllLikeForPost(Long postId){
        likeRepository.deleteAllLikeForPost(postId);
    }
}
