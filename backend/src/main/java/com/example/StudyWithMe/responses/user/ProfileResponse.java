package com.example.StudyWithMe.responses.user;
import com.example.StudyWithMe.models.user.Profile;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ProfileResponse {
    private Long userId;
    private String firstName;
    private String lastName;
    private String gender;
    private String address;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDateTime dateOfBirth;
    private String avatar;
    private String banner;
    private String createdAt;
    public static ProfileResponse fromProfile(Profile profile){
        return ProfileResponse.builder()
                .userId(profile.getProfileId())
                .firstName(profile.getFirstName())
                .lastName(profile.getLastName())
                .gender(profile.getGender())
                .address(profile.getAddress())
                .dateOfBirth(profile.getDateOfBirth())
                .avatar(profile.getAvatar())
                .banner(profile.getBanner())
                .createdAt(profile.getCreatedAt().toString())
                .build();
    }
}
