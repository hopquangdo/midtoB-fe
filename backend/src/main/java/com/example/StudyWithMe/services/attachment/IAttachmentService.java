package com.example.StudyWithMe.services.attachment;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
public interface IAttachmentService {
    String uploadFile(MultipartFile file);
    void deleteFile(String fileName) throws IOException;
}
