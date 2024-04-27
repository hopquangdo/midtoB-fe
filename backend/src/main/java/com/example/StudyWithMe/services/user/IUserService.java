package com.example.StudyWithMe.services.user;

import com.example.StudyWithMe.dataTransferObjects.user.ProfileDTO;
import com.example.StudyWithMe.dataTransferObjects.user.UpdateProfileDTO;
import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.models.user.Profile;
import com.example.StudyWithMe.responses.user.ProfileDetailResponse;

import java.io.IOException;

public interface IUserService {
    Profile createProfile(User existingUser, ProfileDTO profileDTO);
    ProfileDetailResponse updateProfile(User existingUser, UpdateProfileDTO updateProfileDTO) throws IOException;
    Profile getProfile(Long userId);
}
