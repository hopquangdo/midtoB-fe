package com.example.StudyWithMe.services.user.auth;
import com.example.StudyWithMe.dataTransferObjects.user.auth.LoginDTO;
import com.example.StudyWithMe.dataTransferObjects.user.auth.ChangePasswordRequest;
import com.example.StudyWithMe.dataTransferObjects.user.auth.RegisterDTO;
import com.example.StudyWithMe.models.user.auth.User;
import com.example.StudyWithMe.responses.user.auth.AuthResponse;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface IAuthService {
    AuthResponse register(RegisterDTO registerDTO, String userAgent);
    AuthResponse login(LoginDTO loginDTO, String userAgent);
    void logout();
    AuthResponse changePassword(ChangePasswordRequest passwordRequest);
    void deleteUser(Long userId);
    List<User> getAllUser(PageRequest pageRequest);
    List<User> getAllUserForRole(String role,PageRequest pageRequest);
    UserDetails authenticationToken(String token);
    AuthResponse refreshToken(String refreshToken);
    User getUser(Long userId);
    User getUserDetail();
}
