package com.example.StudyWithMe.services.socialmedia.post;

import com.example.StudyWithMe.dataTransferObjects.socialmedia.post.PostDTO;
import com.example.StudyWithMe.exceptions.DataNotFoundException;
import com.example.StudyWithMe.models.socialmedia.comment.Comment;
import com.example.StudyWithMe.models.socialmedia.like.Like;
import com.example.StudyWithMe.models.socialmedia.post.PostAttachment;
import com.example.StudyWithMe.models.user.auth.User;
import com.example.StudyWithMe.models.socialmedia.post.Post;
import com.example.StudyWithMe.models.user.profile.Profile;
import com.example.StudyWithMe.repositories.socialmedia.post.AttachmentRepository;
import com.example.StudyWithMe.repositories.socialmedia.post.PostRepository;
import com.example.StudyWithMe.responses.socialmedia.like.LikeResponse;
import com.example.StudyWithMe.responses.socialmedia.post.PostResponse;
import com.example.StudyWithMe.responses.user.profile.ProfileCardResponse;
import com.example.StudyWithMe.services.attachment.IAttachmentService;
import com.example.StudyWithMe.services.socialmedia.comment.ICommentService;
import com.example.StudyWithMe.services.socialmedia.like.ILikeService;
import com.example.StudyWithMe.services.user.auth.IAuthService;
import com.example.StudyWithMe.services.user.profile.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class PostService implements IPostService {

    private final PostRepository postRepository;
    private final AttachmentRepository attachmentRepository;
    private final IAuthService authService;
    private final IUserService userService;
    private final IAttachmentService attachmentService;
    private final ILikeService likeService;
    private final ICommentService commentService;
    @Override
    public PostResponse createPost(PostDTO postDTO) {
        User poster = authService.getCurrentUser();
        Post newPost = Post.builder()
                .user(poster)
                .content(postDTO.getContent())
                .build();
        postRepository.save(newPost);
        List<String> attachments = new ArrayList<>();
        if (postDTO.getAttachments() != null && !postDTO.getAttachments().isEmpty()) {
            for (MultipartFile file : postDTO.getAttachments()){
                String url = attachmentService.upload(file);
                attachments.add(url);
            }
        }
        attachments.stream().map(attachment -> {
            PostAttachment postAttachment = PostAttachment.builder()
                    .post(newPost)
                    .attachmentType("media")
                    .attachmentUrl(attachment)
                    .build();
            return attachmentRepository.save(postAttachment);
        }).collect(Collectors.toList());
        Profile profile = userService.getProfile(poster.getUserId());
        return PostResponse.fromPost(ProfileCardResponse.fromUserCard(poster, profile), newPost,LikeResponse.fromLike(0,false),0L,attachments);
    }

    @Override
    @Transactional(readOnly = true)
    public List<PostResponse> getAllPost() {
        PageRequest pageRequest = PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<Post> postList = postRepository.findAll(pageRequest);
        List<PostResponse> postResponses = postList.stream().map(post -> {
            User user = authService.getUserByUserId(post.getUser().getUserId());
            Profile profile = userService.getProfile(post.getUser().getUserId());
            List<String> attachmentUrls = post.getAttachments().stream()
                    .map(PostAttachment::getAttachmentUrl)
                    .collect(Collectors.toList());
            LikeResponse likeResponse = likeService.getTotalLikeForPost(post);
            long totalComment = commentService.countByPostId(post.getPostId());
            return PostResponse.fromPost(ProfileCardResponse.builder()
                            .userId(user.getUserId())
                            .userName(user.getUsername())
                            .fullName(profile.getFirstName() + " " + profile.getLastName())
                            .avatar(profile.getAvatar())
                    .build(),post,likeResponse,totalComment,attachmentUrls);
        }).collect(Collectors.toList());
        return postResponses;
    }

    @Override
    @Transactional(readOnly = true)
    public Post getPostDetail(Long postId) {
        Optional<Post> postOptional = postRepository.findById(postId);
        return postOptional.orElseThrow(() -> new DataNotFoundException("Post not found"));
    }
    @Override
    public void deletePost(Long postId) {
        Post existingPost = postRepository.findById(postId).orElse(null);
        List<PostAttachment> attachments = attachmentRepository.findAllByPostId(postId);
        if (!attachments.isEmpty()){
            attachments.stream().map(attachment -> {
                attachmentService.delete(attachment.getAttachmentUrl());
                return null;
            }).toList();
        }
        attachmentRepository.deleteAll(attachments);
        likeService.deleteAllLikeForPost(existingPost);
        commentService.deleteAllCommentForPost(existingPost);
        postRepository.deleteById(postId);
    }
}
