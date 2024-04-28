package com.example.StudyWithMe.responses.socialmedia.like;

import com.example.StudyWithMe.models.socialmedia.like.Like;
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
