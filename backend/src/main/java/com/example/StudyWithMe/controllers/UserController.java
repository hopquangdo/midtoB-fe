package com.example.StudyWithMe.controllers;

import com.example.StudyWithMe.dataTransferObjects.user.ProfileDTO;
import com.example.StudyWithMe.dataTransferObjects.user.UpdateProfileDTO;
import com.example.StudyWithMe.models.user.Profile;
import com.example.StudyWithMe.responses.ResponseObject;
import com.example.StudyWithMe.responses.user.ProfileResponse;
import com.example.StudyWithMe.responses.user.UserResponse;
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
    @PostMapping("/createProfile")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> createProfile(
            @Valid @ModelAttribute ProfileDTO profileDTO,
            BindingResult result
            ){
        if (result.hasErrors()) {
            List<String> errorMessages = result.getFieldErrors()
                    .stream()
                    .map(FieldError::getDefaultMessage)
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(ResponseObject.error(HttpStatus.BAD_REQUEST, errorMessages));
        }
        Profile newProfile = userService.createProfile(profileDTO);
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,
                "Create profile successfully!",
                newProfile));
    }
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
    @GetMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> getUser(){
        UserResponse userResponse = userService.getUserDetail();
        return ResponseEntity.ok(ResponseObject.builder()
                .status(HttpStatus.OK)
                .data(userResponse)
                .build());
    }
    @PutMapping("/updateProfile")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> updateProfile(
            @RequestBody UpdateProfileDTO updateProfileDTO) throws IOException {
        ProfileResponse profileResponse = userService.updateProfile(updateProfileDTO);
        return ResponseEntity.ok((ResponseObject.success(HttpStatus.OK,
                "update profile successfully!",
                profileResponse)));
    }
    @GetMapping("/role/{role}")
    public ResponseEntity<?> getAllProfileForRole(
            @PathVariable String role,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int limit)throws JsonProcessingException{
        List<ProfileResponse> profileResponses = userService.getAllProfileForRole(role,page,limit);
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,String.format("Get all profile for role %s successfully!",role),profileResponses));
    }
}
