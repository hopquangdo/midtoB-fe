package com.example.StudyWithMe.controllers.socailmedia;

import com.example.StudyWithMe.models.socialmedia.like.Like;
import com.example.StudyWithMe.responses.ResponseObject;
import com.example.StudyWithMe.services.socialmedia.like.ILikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/like")
@RequiredArgsConstructor
@CrossOrigin
public class LikeController {
    private final ILikeService likeService;
    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> likePost(@RequestParam Long postId) {
        Like newLike = likeService.likePost(postId);
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,"Post liked successfully",null));
    }
    @DeleteMapping("/unlike")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> unlikePost(@RequestParam Long postId) {
        likeService.unlikePost(postId);
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,"Post unliked successfully",null));
    }
    @GetMapping("/totalLike")
    public ResponseEntity<?> getAllLikeForPost(@RequestParam Long postId){
        long totalLike = likeService.getTotalLikeForPost(postId);
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,"GET SUCCESSFULLY", totalLike));
    }
}
