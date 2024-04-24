package com.example.StudyWithMe.responses.auth;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
@Data
@Builder
public class AuthResponse {
    private Long userId;
    private String userName;
    private List<String> roles;
    private TokenResponse token;
}
