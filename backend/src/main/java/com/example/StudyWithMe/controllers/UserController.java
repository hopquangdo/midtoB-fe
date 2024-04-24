package com.example.StudyWithMe.controllers;

import com.example.StudyWithMe.dataTransferObjects.user.ProfileDTO;
import com.example.StudyWithMe.dataTransferObjects.user.UpdateProfileDTO;
import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.models.user.Profile;
import com.example.StudyWithMe.responses.ResponseObject;
import com.example.StudyWithMe.responses.user.ProfileResponse;
import com.example.StudyWithMe.responses.user.UserResponse;
import com.example.StudyWithMe.services.auth.IAuthService;
import com.example.StudyWithMe.services.user.IUserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    private final IUserService userService;
    private final IAuthService authService;
    @GetMapping("/profile/{userId}")
    public ResponseEntity<?> getProfile(
            @PathVariable Long userId
    ) throws JsonProcessingException{
        ProfileResponse profileResponse = userService.getProfile(userId);
        return ResponseEntity.ok(ResponseObject.builder()
                        .status(HttpStatus.OK)
                        .data(profileResponse)
                .build());
    }
    @PutMapping("/updateProfile")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> updateProfile(
            @RequestBody UpdateProfileDTO updateProfileDTO) throws IOException {
        User existingUser = authService.getUserDetail();
        ProfileResponse profileResponse = userService.updateProfile(existingUser,updateProfileDTO);
        return ResponseEntity.ok((ResponseObject.success(HttpStatus.OK,
                "update profile successfully!",
                profileResponse)));
    }
}
