package com.example.StudyWithMe.dataTransferObjects.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class LoginDTO {
    @Email
    private String email;
    @Size(min = 6)
    private String password;
}
