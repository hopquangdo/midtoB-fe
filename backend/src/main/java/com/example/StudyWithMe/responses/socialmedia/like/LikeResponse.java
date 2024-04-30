package com.example.StudyWithMe.responses.socialmedia.like;

import com.example.StudyWithMe.models.socialmedia.like.Like;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class LikeResponse {
    private long totalLike;
    private boolean isLike;
    public static LikeResponse fromLike(long totalLike,boolean isLike){
        return LikeResponse.builder()
                .totalLike(totalLike)
                .isLike(isLike)
                .build();
    }
}
