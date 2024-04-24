package com.example.StudyWithMe.services.user;

import com.example.StudyWithMe.dataTransferObjects.user.ProfileDTO;
import com.example.StudyWithMe.dataTransferObjects.user.UpdateProfileDTO;
import com.example.StudyWithMe.models.user.Profile;
import com.example.StudyWithMe.responses.user.ProfileResponse;
import com.example.StudyWithMe.responses.user.UserResponse;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.io.IOException;
import java.util.List;

public interface IUserService {
    Profile createProfile(ProfileDTO profileDTO);
    ProfileResponse updateProfile(UpdateProfileDTO updateProfileDTO) throws IOException;
    ProfileResponse getProfile(Long userId) throws JsonProcessingException;
    UserResponse getUserDetail();
    List<ProfileResponse> getAllProfileForRole(String role,int page, int limit)throws JsonProcessingException;
}
