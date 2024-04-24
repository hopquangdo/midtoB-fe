package com.example.StudyWithMe.responses.auth;

import com.example.StudyWithMe.responses.user.ProfileResponse;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
@Data
@Builder
public class AuthResponse {
    private Long userId;
    private List<String> roles;
    private TokenResponse token;
    private ProfileResponse profile;
}
