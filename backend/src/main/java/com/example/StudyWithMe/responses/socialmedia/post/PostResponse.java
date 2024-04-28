package com.example.StudyWithMe.responses.socialmedia.post;

import com.example.StudyWithMe.models.socialmedia.like.Like;
import com.example.StudyWithMe.models.socialmedia.post.Post;
import com.example.StudyWithMe.responses.socialmedia.like.LikeResponse;
import com.example.StudyWithMe.responses.user.profile.UserCardResponse;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
public class PostResponse {
    private Long postId;
    private UserCardResponse poster;
    private String content;
    private List<String> attachments;
    private LocalDateTime createdAt;
    private List<LikeResponse> likes;
    public static PostResponse fromPost(UserCardResponse poster, Post post, List<Like> likes, List<String> attachments){
        return PostResponse.builder()
                .postId(post.getPostId())
                .poster(poster)
                .content(post.getContent())
                .attachments(attachments)
                .likes(likes!=null ? likes.stream().map(LikeResponse::fromLike).collect(Collectors.toList()): new ArrayList<>())
                .createdAt(post.getCreatedAt())
                .build();
    }
}
