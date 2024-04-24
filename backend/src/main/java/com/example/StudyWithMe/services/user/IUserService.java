package com.example.StudyWithMe.services.user;

import com.example.StudyWithMe.dataTransferObjects.user.ProfileDTO;
import com.example.StudyWithMe.dataTransferObjects.user.UpdateProfileDTO;
import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.models.user.Profile;
import com.example.StudyWithMe.responses.user.ProfileResponse;
import com.example.StudyWithMe.responses.user.UserResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.IOException;
import java.util.List;

public interface IUserService {
    Profile createProfile(User existingUser, ProfileDTO profileDTO);
    ProfileResponse updateProfile(User existingUser,UpdateProfileDTO updateProfileDTO) throws IOException;
    ProfileResponse getProfile(Long userId);
}
