package com.example.StudyWithMe.responses.like;

import com.example.StudyWithMe.models.post.Like;
import com.example.StudyWithMe.repositories.post.LikeRepository;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class LikeResponse {
    private Long likeId;
    private Long userId;
    private LocalDateTime createdAt;
    public static LikeResponse fromLike(Like like){
        return LikeResponse.builder()
                .likeId(like.getLikeId())
                .userId(like.getUser().getUserId())
                .createdAt(like.getCreatedAt())
                .build();
    }
}
