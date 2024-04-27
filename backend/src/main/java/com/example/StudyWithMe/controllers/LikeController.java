package com.example.StudyWithMe.controllers;

import com.example.StudyWithMe.models.post.Like;
import com.example.StudyWithMe.responses.ResponseObject;
import com.example.StudyWithMe.responses.like.LikeResponse;
import com.example.StudyWithMe.responses.like.ListLikeResponse;
import com.example.StudyWithMe.services.post.ILikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

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
