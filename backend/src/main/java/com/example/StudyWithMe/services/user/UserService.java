package com.example.StudyWithMe.services.user;
import com.example.StudyWithMe.dataTransferObjects.user.ProfileDTO;
import com.example.StudyWithMe.dataTransferObjects.user.UpdateProfileDTO;
import com.example.StudyWithMe.exceptions.DataNotFoundException;
import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.models.user.Profile;
import com.example.StudyWithMe.repositories.user.ProfileRepository;
import com.example.StudyWithMe.responses.user.ProfileResponse;
import com.example.StudyWithMe.responses.user.UserResponse;
import com.example.StudyWithMe.services.attachment.IAttachmentService;
import com.example.StudyWithMe.services.auth.IAuthService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class UserService implements IUserService{
    private final IAttachmentService attachmentService;
    private final ProfileRepository profileRepository;
    private final IAuthService authService;
    @Transactional
    @Override
    public Profile createProfile(ProfileDTO profileDTO) {
        User existingUser = authService.getUserDetail();
        Profile newProfile = Profile.builder()
                .profileId(existingUser.getUserId())
                .firstName(profileDTO.getFirstName())
                .lastName(profileDTO.getLastName())
                .gender(profileDTO.getGender())
                .address(profileDTO.getAddress())
                .dateOfBirth(profileDTO.getDateOfBirth())
                .build();
        if (!profileDTO.getAvatar().isEmpty()) {
            String avatarUrl = attachmentService.uploadFile(profileDTO.getAvatar());
            newProfile.setAvatar(avatarUrl);
        } else {
            newProfile.setAvatar(null);
        }
        if (!profileDTO.getBanner().isEmpty()){
            String bannerUrl = attachmentService.uploadFile(profileDTO.getBanner());
            newProfile.setBanner(bannerUrl);
        } else {
            newProfile.setBanner(null);
        }
        profileRepository.save(newProfile);
        return newProfile;
    }

    @Override
    public ProfileResponse getProfile(Long userId) throws JsonProcessingException {
        Profile userProfile = profileRepository.findById(userId)
                .orElseThrow(()->new DataNotFoundException("Cannot found profile with id " + userId));
        return ProfileResponse.fromProfile(userProfile);
    }
    @Override
    public UserResponse getUserDetail() {
        User existingUser = authService.getUserDetail();
        Profile profileUser = profileRepository.findById(existingUser.getUserId())
                .orElse(null);
        return UserResponse.fromUser(existingUser,profileUser);
    }
    @Override
    public List<ProfileResponse> getAllProfileForRole(String role
            ,int page, int limit) throws JsonProcessingException{
        PageRequest pageRequest = PageRequest.of(page, limit);
        pageRequest.withSort(Sort.by("updatedAt"));
        List<User> users = authService.getAllUserForRole(role,pageRequest);
        System.out.println(users);
        List<ProfileResponse> profileResponses = users.stream().map(user -> {
            Profile profile = profileRepository.findById(user.getUserId())
                    .orElse(Profile.builder()
                            .profileId(user.getUserId())
                            .build());
            return ProfileResponse.fromProfile(profile);
        }).collect(Collectors.toList());
        System.out.println(profileResponses);
        return profileResponses;
    }
    @Override
    @Transactional
    public ProfileResponse updateProfile(UpdateProfileDTO profileDTO) throws IOException {
        User existingUser = authService.getUserDetail();
        Profile profileUser = profileRepository.findById(existingUser.getUserId())
                .orElse(Profile.builder()
                        .profileId(existingUser.getUserId())
                        .banner("banner-default.jpg")
                        .avatar("avatar-default.jpg")
                        .build());
        if (profileDTO.getFirstName()!=null && !profileDTO.getFirstName().equals(profileUser.getFirstName())){
            profileUser.setFirstName(profileDTO.getFirstName());
        }
        if (profileDTO.getLastName()!=null && !profileDTO.getLastName().equals(profileUser.getLastName())){
            profileUser.setLastName(profileDTO.getLastName());
        }
        if (profileDTO.getAddress()!=null && !profileDTO.getAddress().equals(profileUser.getAddress                       ())){
            profileUser.setAddress(profileDTO.getAddress());
        }
        if (profileDTO.getAvatar()!=null && !profileDTO.getAvatar().equals(profileUser.getAvatar())){
            attachmentService.deleteFile(profileUser.getAvatar());
            profileUser.setAvatar(profileDTO.getAvatar());
        }
        if (profileDTO.getBanner()!=null && !profileDTO.getBanner().equals(profileUser.getBanner())){
            attachmentService.deleteFile(profileUser.getBanner());
            profileUser.setBanner(profileDTO.getBanner());
        }
        profileRepository.save(profileUser);
        return ProfileResponse.fromProfile(profileUser);
    }
}
