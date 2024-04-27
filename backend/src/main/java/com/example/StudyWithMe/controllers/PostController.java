package com.example.StudyWithMe.controllers;

import com.example.StudyWithMe.dataTransferObjects.post.PostDTO;
import com.example.StudyWithMe.models.post.Like;
import com.example.StudyWithMe.models.post.Post;
import com.example.StudyWithMe.responses.ResponseObject;
import com.example.StudyWithMe.responses.post.PostResponse;
import com.example.StudyWithMe.services.post.ILikeService;
import com.example.StudyWithMe.services.post.IPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/post")
@CrossOrigin
@RequiredArgsConstructor
public class PostController {

    private final IPostService postService;
    @PostMapping("/createPost")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<?> createPost(@RequestBody PostDTO post) {
        PostResponse newPost = postService.createPost(post);
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,"Create post successully",newPost));
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllPost() {
        List<PostResponse> postResponses = postService.getAllPost();
        return ResponseEntity.ok(ResponseObject.success(HttpStatus.OK,"Get all post",postResponses));
    }
    @GetMapping("/{postId}")
    public ResponseEntity<Post> getPostDetail(@PathVariable Long postId) {
        Post post = postService.getPostDetail(postId);
        if (post == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(post);
    }
}
