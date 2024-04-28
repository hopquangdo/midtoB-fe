package com.example.StudyWithMe.responses.socialmedia.like;

import lombok.Builder;
import lombok.Data;
import java.util.List;
@Data
@Builder
public class ListLikeResponse {
    private int totalPages;
    private List<LikeResponse> likes;
}
