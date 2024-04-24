package com.example.StudyWithMe.controllers;

import com.example.StudyWithMe.responses.ResponseObject;
import com.example.StudyWithMe.services.attachment.IAttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

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
        String fileUrl = attachmentService.uploadFile(file);
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,"Upload file successfully",fileUrl));
    }
    @DeleteMapping("/deleteFile/{fileName}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> deleteFile(
            @PathVariable String fileName
    ) throws IOException {
        attachmentService.deleteFile(fileName);
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,"Delete file successfully",""));
    }
    @GetMapping("/{fileName}")
    public ResponseEntity<?> viewFile(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get(uploadDir, fileName);
            UrlResource resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                MediaType mediaType = MediaType.IMAGE_JPEG;
                if (fileName.endsWith(".pdf")) {
                    mediaType = MediaType.APPLICATION_PDF;
                }
                return ResponseEntity.ok()
                        .contentType(mediaType)
                        .body(resource);
            }
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(new UrlResource(Paths.get(String.format("%s/notFound.jpg",uploadDir)).toUri()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
