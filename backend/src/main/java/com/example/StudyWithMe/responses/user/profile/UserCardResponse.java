package com.example.StudyWithMe.responses.user.profile;

import com.example.StudyWithMe.models.user.auth.User;
import com.example.StudyWithMe.models.user.profile.Profile;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserCardResponse {
    private Long userId;
    private String userName;
    private String fullName;
    private String avatar;
    public static UserCardResponse fromUserCard(User user, Profile profile){
        return UserCardResponse.builder()
                .userId(user.getUserId())
                .userName("dqh999")
                .fullName(profile.getFirstName() + " " + profile.getLastName())
                .avatar(profile.getAvatar())
                .build();
    }
}
