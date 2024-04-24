package com.example.StudyWithMe.services.attachment;
import com.example.StudyWithMe.exceptions.InvalidParamException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;
@Service
public class AttachmentService  implements IAttachmentService{
    @Value("uploads")
    private String uploadDir;
    @Override
    public String uploadFile(MultipartFile file) {
        try {
            String url = storeFile(file);
            return url;
        } catch (IOException e){
            throw new InvalidParamException("Cannot upload file! " + e.getMessage());
        }
    }
    @Override
    public void deleteFile(String fileName) throws IOException {
        Path uploadDirPath = Paths.get(uploadDir);
        Path filePath = uploadDirPath.resolve(fileName);
        if (Files.exists(filePath)) {
            Files.delete(filePath);
        } ;
    }
    private String storeFile(MultipartFile file) throws IOException {
        try {
            if (!isValidFile(file) || file.getOriginalFilename() == null) {
                throw new IOException("Invalid file format");
            }
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            String uniqueFileName = UUID.randomUUID() + "_" + fileName;
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
            Path destination = Paths.get(uploadPath.toString(), uniqueFileName);
            Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
            return uniqueFileName;
        } catch (IOException ex) {
            throw new IOException("Could not store file " + file.getOriginalFilename(), ex);
        }
    }
    private boolean isValidFile(MultipartFile file){
        return isVideoFile(file) || isImageFile(file);
    }
    private boolean isVideoFile(MultipartFile file) {
        String contentType = file.getContentType();
        return contentType != null && contentType.startsWith("video/");
    }
    private boolean isImageFile(MultipartFile file) {
        String contentType = file.getContentType();
        return contentType != null && contentType.startsWith("image/");
    }
}
