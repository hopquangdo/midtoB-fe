package com.example.StudyWithMe.services.socialmedia.like;

import com.example.StudyWithMe.models.user.auth.User;
import com.example.StudyWithMe.models.socialmedia.like.Like;
import com.example.StudyWithMe.models.socialmedia.post.Post;
import com.example.StudyWithMe.repositories.socialmedia.like.LikeRepository;
import com.example.StudyWithMe.services.user.auth.IAuthService;
import com.example.StudyWithMe.services.socialmedia.post.IPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LikeService implements ILikeService {
    private final LikeRepository likeRepository;
    private final IAuthService authService;
    @Override
    public Like likePost(Post post) {
        User existingUser = authService.getUserDetail();
        Like newLike = Like.builder()
                .post(post)
                .user(existingUser)
                .build();
        likeRepository.save(newLike);
        return newLike;
    }

    @Override
    public void unlikePost(Post post) {
        User existingUser = authService.getUserDetail();
        likeRepository.deleteByUserAndPost(existingUser.getUserId(),post.getPostId());
    }
    @Override
    public List<Like> getAllLikeForPost(Post post) {
        return likeRepository.findAllByPost(post);
    }
    @Override
    public void deleteAllLikeForPost(Post post){
        likeRepository.deleteAllLikeForPost(post.getPostId());
    }
}
