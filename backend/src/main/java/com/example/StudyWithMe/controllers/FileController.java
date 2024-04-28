package com.example.StudyWithMe.controllers;

import com.example.StudyWithMe.responses.ResponseObject;
import com.example.StudyWithMe.services.attachment.IAttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/v1/file")
@CrossOrigin
@RequiredArgsConstructor
public class FileController {
    @Value("uploads")
    private String uploadDir;
    private final IAttachmentService attachmentService;
    @PostMapping("/uploadFile")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> uploadFile(
            @ModelAttribute MultipartFile file){
        String url = attachmentService.upload(file);
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,"Upload file successfully",url));
    }
}
