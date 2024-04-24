package com.example.StudyWithMe.dataTransferObjects.auth;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class ChangePasswordRequest {
    private String currentPassword;
    private String newPassword;
}