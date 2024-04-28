package com.example.StudyWithMe.responses.socialmedia.post;

import com.example.StudyWithMe.models.socialmedia.post.Post;
import com.example.StudyWithMe.responses.user.profile.UserCardResponse;
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
    public static PostResponse fromPost(UserCardResponse poster,Post post,List<String> attachments){
        return PostResponse.builder()
                .postId(post.getPostId())
                .poster(poster)
                .content(post.getContent())
                .attachments(attachments)
                .createdAt(post.getCreatedAt())
                .build();
    }
}
