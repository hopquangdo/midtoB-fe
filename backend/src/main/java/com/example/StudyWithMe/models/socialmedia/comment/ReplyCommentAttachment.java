package com.example.StudyWithMe.models.socialmedia.comment;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Table(name = "reply_comment_attachments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReplyCommentAttachment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attachment_id")
    private Long attachmentId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reply_comment_id")
    private ReplyComment replyComment;
    @Column(name = "attachment_type", length = 20)
    private String attachmentType;
    @Column(name = "attachment_url", columnDefinition = "TEXT")
    private String attachmentUrl;

}