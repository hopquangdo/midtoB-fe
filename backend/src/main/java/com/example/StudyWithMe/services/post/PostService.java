package com.example.StudyWithMe.services.post;

import com.example.StudyWithMe.dataTransferObjects.post.PostDTO;
import com.example.StudyWithMe.exceptions.DataNotFoundException;
import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.models.post.Post;
import com.example.StudyWithMe.models.post.Like;
import com.example.StudyWithMe.models.user.Profile;
import com.example.StudyWithMe.repositories.post.LikeRepository;
import com.example.StudyWithMe.repositories.post.PostRepository;
import com.example.StudyWithMe.responses.post.PostResponse;
import com.example.StudyWithMe.responses.user.UserCardResponse;
import com.example.StudyWithMe.services.auth.IAuthService;
import com.example.StudyWithMe.services.user.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService implements IPostService {

    private final PostRepository postRepository;
    private final LikeRepository likeRepository;
    private final IAuthService authService;
    private final IUserService userService;
    @Override
    public PostResponse createPost(PostDTO postDTO) {
        User poster = authService.getUserDetail();
        Post newPost = Post.builder()
                .user(poster)
                .content(postDTO.getContent())
                .build();
        postRepository.save(newPost);
        Profile profile = userService.getProfile(poster.getUserId());
        return PostResponse.fromPost(UserCardResponse.fromUserCard(poster,profile),
                                    newPost);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PostResponse> getAllPost() {
        PageRequest pageRequest = PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<Post> postList =postRepository.findAll(pageRequest);
        List<PostResponse> postResponses = postList.stream().map(post -> {
            User user = authService.getUser(post.getUser().getUserId());
            Profile profile = userService.getProfile(post.getUser().getUserId());
            return PostResponse.fromPost(UserCardResponse.fromUserCard(user,profile),post);
        }).collect(Collectors.toList());
        return postResponses;
    }

    @Override
    @Transactional(readOnly = true)
    public Post getPostDetail(Long postId) {
        Optional<Post> postOptional = postRepository.findById(postId);
        return postOptional.orElse(null);
    }
}
