package com.example.StudyWithMe.services.auth;
import com.example.StudyWithMe.models.user.auth.User;
import com.example.StudyWithMe.responses.auth.TokenResponse;
public interface ITokenService {
    TokenResponse addToken(User user, String token, String userAgent);
    void validateToken(String token);
    TokenResponse refreshToken(User user, String refreshToken);
    void deleteToken(User user);
}
