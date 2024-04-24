package com.example.StudyWithMe.services.user;
import com.example.StudyWithMe.dataTransferObjects.user.ProfileDTO;
import com.example.StudyWithMe.dataTransferObjects.user.UpdateProfileDTO;
import com.example.StudyWithMe.exceptions.DataNotFoundException;
import com.example.StudyWithMe.models.auth.User;
import com.example.StudyWithMe.models.user.Profile;
import com.example.StudyWithMe.repositories.user.ProfileRepository;
import com.example.StudyWithMe.responses.user.ProfileResponse;
import com.example.StudyWithMe.services.attachment.IAttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
@Service
@RequiredArgsConstructor
public class UserService implements IUserService{
    private final IAttachmentService attachmentService;
    private final ProfileRepository profileRepository;
    @Transactional
    @Override
    public Profile createProfile(User existingUser,ProfileDTO profileDTO) {
        Profile newProfile = Profile.builder()
                .profileId(existingUser.getUserId())
                .firstName(profileDTO.getFirstName())
                .lastName(profileDTO.getLastName())
                .gender(profileDTO.getGender())
                .address(profileDTO.getAddress())
                .dateOfBirth(profileDTO.getDateOfBirth())
                .build();
        if (profileDTO.getAvatar() != null && !profileDTO.getAvatar().isEmpty()) {
            String avatarUrl = attachmentService.uploadFile(profileDTO.getAvatar());
            newProfile.setAvatar(avatarUrl);
        } else {
            newProfile.setAvatar(null);
        }
        if (profileDTO.getBanner() != null && !profileDTO.getBanner().isEmpty()){
            String bannerUrl = attachmentService.uploadFile(profileDTO.getBanner());
            newProfile.setBanner(bannerUrl);
        } else {
            newProfile.setBanner(null);
        }
        profileRepository.save(newProfile);
        return newProfile;
    }

    @Override
    public ProfileResponse getProfile(Long userId) {
        Profile userProfile = profileRepository.findById(userId)
                .orElseThrow(()->new DataNotFoundException("Cannot found profile with id " + userId));
        return ProfileResponse.fromProfile(userProfile);
    }
    @Override
    @Transactional
    public ProfileResponse updateProfile(User existingUser,UpdateProfileDTO profileDTO) throws IOException {
        Profile profileUser = profileRepository.findById(existingUser.getUserId())
                .orElse(
                        Profile.builder().build()
                );
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
