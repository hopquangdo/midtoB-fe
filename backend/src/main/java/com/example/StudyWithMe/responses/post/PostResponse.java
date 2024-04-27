package com.example.StudyWithMe.responses.post;

import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.models.post.Post;
import com.example.StudyWithMe.models.user.Profile;
import com.example.StudyWithMe.responses.user.UserCardResponse;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
@Data
@Builder
public class PostResponse {
    private Long postId;
    private UserCardResponse poster;
    private String content;
    private List<String> attachments;
    private LocalDateTime createdAt;
    public static PostResponse fromPost(UserCardResponse poster,Post post){
        return PostResponse.builder()
                .postId(post.getPostId())
                .poster(poster)
                .content(post.getContent())
                .createdAt(post.getCreatedAt())
                .build();
    }
}
